/* ==========================================================
   ResumeOS
   Theme Engine
========================================================== */

const themeButton = document.getElementById("themeButton");
const themePanel = document.getElementById("themePanel");
const themeStyle = document.getElementById("theme-style");

/* ========================================================== */

const themes = {

    "apple": "css/apple.css",

    "ai-os": "css/ai-os.css",

    "dashboard": "css/dashboard.css",

    "cinematic": "css/cinematic.css"

};

/* ========================================================== */

themeButton.addEventListener("click", () => {

    themePanel.classList.toggle("hidden");

});

/* ========================================================== */

document.querySelectorAll("[data-theme]").forEach(button => {

    button.addEventListener("click", () => {

        const selectedTheme = button.dataset.theme;

        changeTheme(selectedTheme);

        themePanel.classList.add("hidden");

    });

});

/* ========================================================== */

function changeTheme(themeName){

    if(!themes[themeName]){

        console.warn("Theme not found.");

        return;

    }

    themeStyle.setAttribute("href", themes[themeName]);

    localStorage.setItem("ResumeOSTheme", themeName);

}

/* ========================================================== */

function loadSavedTheme(){

    const savedTheme =
        localStorage.getItem("ResumeOSTheme") || "apple";

    changeTheme(savedTheme);

}

/* ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadSavedTheme();

});

/* ========================================================== */

/* Close popup when clicking outside */

window.addEventListener("click", (event)=>{

    if(event.target === themePanel){

        themePanel.classList.add("hidden");

    }

});
