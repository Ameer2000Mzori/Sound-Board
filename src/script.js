// selecting our elements
var buttonsWrap = document.getElementsByClassName("buttons-wrap")[0];
// our object data
var dataObj = [
    {
        title: "applause",
        sound: "",
    },
    {
        title: "boo",
        sound: "",
    },
    {
        title: "gasp",
        sound: "",
    },
    {
        title: "tada",
        sound: "",
    },
    {
        title: "victory",
        sound: "",
    },
    {
        title: "wrong",
        sound: "",
    },
];
// our functions
var loadData = function () {
    // using foreach to get all the data we need
    dataObj.forEach(function (data) {
        // creating our btn element and giving it class
        var soundBtn = document.createElement("button");
        soundBtn.classList.add("btn");
        soundBtn.textContent = data.title;
        // creating our audio element
        var audioEl = document.createElement("audio");
        audioEl.src = data.sound;
        // appnding elemtns to parents
        soundBtn.appendChild(audioEl);
        buttonsWrap.appendChild(soundBtn);
        // here is our buttons on click function
        soundBtn.addEventListener("click", function () {
            console.log(soundBtn.textContent);
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
