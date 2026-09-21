<img src="images/catfish.png">
<img src="images/bluefish.png">
<img src="images/mutlifish.png">
<img src="images/orangefish.png">



/* transition to make individual fish stop swimming on hover */
/* .fishes img:hover {
    transition: transform 3s ease-in-out;
    transform: translateX(0px);
} */



/* .fishes img {
    width: 200px;
    height: auto;
    transition: transform 1s ease-in-out
}

.fishes img:hover {
    transform: translateX(30px);
} */



//super cool gif grid: 
body {
    margin: 0;
    align-items: center;
    justify-content: center;
}

.gif-collage {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-auto-rows: auto; */
    justify-items: center;
    align-items: center; 
}

.gif-collage img {
    max-width: 390px;
}

/* .fishes img {
    max-height: 140px;
    width: auto;
    object-fit: contain;
} */


.gif-collage {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    width: 100vw;
    height: 100vh;
    gap: 2px;
    overflow: hidden;
}

.gif {
    width: 100%;
    height: 100%;
    object-fit: cover; /* prevents distortion as cells shrink */
}



// flexbox + grid for textpage
/* body {
    background-color: black;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    color: white;
    padding: 10px;
    font-size: 16px;
    font-family: "pangolin", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;
}

.info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    width: 100vw;
    height: 100vh;
    padding: 10px;
} */





   <!-- <img class="fish swim" src="images/multiplefish.png">
        <img class="fish swim" src="images/prettyfish.png">
        <img class="fish swim" src="images/spotfish.png">
        <img class="fish swim" src="images/bluefish.png"> -->




/* 
@keyframes jellyfish-swim {
  0% {
    transform: translateX(0px);
    transform: translateY(0px);
  }
  50% {
    transform: translateX(50px);
    transform: translateY(50px);
  }
  100% {
    transform: translateX(100px);
    transform: translateY(100px);
  }
} */

@keyframes jellyfish-swim {
  0% {
    transform: translateX(0vw);
    transform: translateY(0vh);
  }
  50% {
    transform: translateX(10vw);
    transform: translateY(10vh);
  }
  100% {
    transform: translateX(20vw);
    transform: translateY(20vh);
  }
}




.text-container > * {
  outline: 1px solid red;
}




/* 
@keyframes fish-swim {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(50px);
  }
  75% {
    transform: translateX(75px);
  }
  100% {
    transform: translateX(100px);
  }
}

.pix {
  animation-name: fish-swim;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
} */