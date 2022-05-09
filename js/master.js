//Start stotage
let maincolor = localStorage.getItem('color_option');
const colorfill = document.querySelectorAll(".colors li");
if (maincolor !== null) {
    document.documentElement.style.setProperty('--main_color', maincolor);
    document.querySelectorAll(".settingbox .option li").forEach(it => {
        if (it.dataset.color === maincolor) {
            it.classList.add("active");
        } else {
            it.classList.remove("active");
        }
    });

}
// end storage
//start setting in landing
let setting = document.querySelector(".fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".settingbox").classList.toggle("open");
};
colorfill.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main_color', e.target.dataset.color);
        localStorage.setItem('color_option', e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(it => {
            it.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
// End setting in Landing
//start landing
let landing = document.querySelector(".landingpage");
let images = new Array();
for (let i = 1; i <= 5; i++) {
    images.push("0" + i + ".jpg");
    console.log("0" + i + ".jpg");
}
let back = 0;

function getrandom() {
    let random = Math.floor(Math.random() * images.length);
    return random;
}

function nextimage() {
    landing.style.backgroundImage = 'URL("../images/0' + getrandom() + '.jpg")';
}
setInterval(nextimage, 2000);
//End landing
//Start Skill
let skills = document.querySelector(".skills");
window.onscroll = () => {
        let top = skills.offsetTop;
        let height = skills.offsetHeight;
        let windowheight = this.innerHeight;
        let scroll = this.pageYOffset;
        if (scroll >= (top + height - windowheight)) {
            console.log("yes");
            let spans = document.querySelectorAll(".skill-box .skill-progress span");
            spans.forEach(it => {
                //     console.log(it);
                it.style.width = it.dataset.progress;
            });
        }
    }
    //End Skill
    //Start Gallery
let Gimages = document.querySelectorAll(".gallery .images img");
Gimages.forEach(it => {
    it.addEventListener("click", (e) => {
        let div = document.createElement("div");
        div.className = "popup_overlay";
        document.body.appendChild(div);
        let popup = document.createElement("div");
        popup.className = "popup_box";
        let text = document.createElement("h3");
        popup.appendChild(text);
        if (it.alt != "") {
            let alttext = document.createTextNode(it.alt);
            console.log(alttext);
            text.appendChild(alttext);

        } else {
            let alttext = document.createTextNode("image");
            text.className = "poptext";
            console.log(alttext);
            text.appendChild(alttext);
        }
        let popupimage = document.createElement("img");
        popupimage.src = it.src;
        popup.appendChild(popupimage);
        document.body.appendChild(popup);
        let closebutton = document.createElement("span");
        let closebuttontext = document.createTextNode("x");
        closebutton.appendChild(closebuttontext);
        closebutton.className = "close-button";
        popup.appendChild(closebutton);
        console.log(it);
    });

    document.addEventListener("click", (e) => {
        if (e.target.className == "close-button") {
            e.target.parentNode.remove();
            document.querySelector(".popup_overlay").remove();
        }
    });
});

allbullets = document.querySelectorAll(".bullets .b")
allbullets.forEach(it => {
    it.addEventListener("click", (e) => {
        let x = e.target.dataset.section;
        document.querySelector("." + x).scrollIntoView({
            behavior: "smooth"

        });
    });
});

//END Gallery