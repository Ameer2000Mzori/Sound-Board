// selecting our elements
const buttonsWrap = document.getElementsByClassName(
  "buttons-wrap"
)[0] as HTMLElement;
const headerEl = document.getElementsByClassName("header")[0] as HTMLElement;

// our object data
let dataObj = [
  {
    title: "applause",
    sound: "/sounds/Applause.m4a",
  },
  {
    title: "boo",
    sound: "/sounds/Boo.m4a",
  },
  {
    title: "gasp",
    sound: "/sounds/Gasp.m4a",
  },
  {
    title: "tada",
    sound: "/sounds/Tada.m4a",
  },
  {
    title: "victory",
    sound: "/sounds/Victory.m4a",
  },
  {
    title: "wrong",
    sound: "/sounds/Wrong.m4a",
  },
];

// our functions
const loadData = (): any => {
  // using foreach to get all the data we need
  dataObj.forEach((data): any => {
    // creating our btn element and giving it class
    const soundBtn = document.createElement("button");
    soundBtn.classList.add("btn");
    soundBtn.textContent = data.title;
    // creating our audio element
    let audioEl = document.createElement("audio");
    audioEl.src = data.sound;
    // appnding elemtns to parents
    soundBtn.appendChild(audioEl);
    buttonsWrap.appendChild(soundBtn);
    // here is our buttons on click function
    soundBtn.addEventListener("click", () => {
      console.log(soundBtn.textContent);
      audioEl.play();

      if (!audioEl.paused) {
        soundBtn.disabled = true;
      }
    });
  });
};

// our evenlisnters
window.addEventListener("load", loadData);
// our html tree mock

// <button class="btn">BOO<audio class="audio" src=""></audio></button>
// <button class="btn">BOO<audio class="audio" src=""></audio></button>
// <button class="btn">BOO<audio class="audio" src=""></audio></button>
// <button class="btn">BOO<audio class="audio" src=""></audio></button>
