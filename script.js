//TO STOP FISH SWIMMING + CHANGE PAGE
const fishElements = document.querySelectorAll(".fish");
console.log(fishElements);

fishElements.forEach(function (fish) {
  fish.addEventListener("click", function () {
    fish.classList.remove("swim");

    //if there is no element left with both fish AND swim class = all fish clicked, change page
    const swimmingFish = document.querySelectorAll(".fish.swim");
    if (swimmingFish.length === 0) {
      allFishClicked();
    }
  });
});

function allFishClicked() {
  window.location.href = "pages/text.html";
}

//TO MULTIPLY GIFS
//grabs parent div, so new gifs can be inserted here
const gifContainer = document.querySelector(".gif-container");

//gets the count of gifs
let gifCount = document.querySelectorAll(".gif").length;

function attachClickHandler(gif) {
  gif.addEventListener("click", function () {
    //if gif count is 60+, function exits
    if (gifCount >= 60) return;

    //picks 5, or how many gifs left before hitting 60
    const toAdd = Math.min(4, 60 - gifCount);

    //loop, makes copy of clicked gif, adds eventlistener to clone, inserts clone into the DOM to parent div
    for (let i = 0; i < toAdd; i++) {
      const clone = gif.cloneNode(true);
      attachClickHandler(clone);
      gifContainer.appendChild(clone);
    }
    //after gif is added, updates total with new gifs
    gifCount += toAdd;

    // if the count reaches 60; change page
    if (gifCount >= 60) {
      window.location.href = "../index.html";
    }
  });
}

//grabs gifs, calls attachclickhandler
document.querySelectorAll(".gif").forEach(attachClickHandler);


//AUDIO -- used claude for this!
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgm");
  const key = "bgmTime";

  //checks if its home page, otherwise resumes from saved position
  const isHomePage =
    location.pathname.endsWith("/index.html") ||
    location.pathname.endsWith("/");

  if (isHomePage) {
    audio.currentTime = 0;
    localStorage.removeItem(key);
  } else {
    const saved = localStorage.getItem(key);
    if (saved) audio.currentTime = parseFloat(saved);
  }

  //autoplay blocked until first interaction so starts on click
  audio.play().catch(() => {
    document.addEventListener("click", () => audio.play(), { once: true });
  });

  //save position
  setInterval(() => localStorage.setItem(key, audio.currentTime), 500);
  window.addEventListener("beforeunload", () =>
    localStorage.setItem(key, audio.currentTime),
  );
});
