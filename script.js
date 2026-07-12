/* ==========================================================
   ResumeOS
   Main Application Controller
   Version: 1.0
========================================================== */

"use strict";

/* ==========================================================
   ResumeOS Namespace
========================================================== */

const ResumeOS = {

    version: "1.0.0",

    initialized: false,

    settings: {

        animations: true,

        theme: "apple"

    }

};

/* ==========================================================
   Initialize Application
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp(){

    console.log("--------------------------------");

    console.log("ResumeOS Started");

    console.log("Version :", ResumeOS.version);

    console.log("--------------------------------");

    ResumeOS.initialized = true;

    initializeNavigation();

    initializeButtons();

    initializeKeyboardShortcuts();

    restoreSettings();

}

/* ==========================================================
   Navigation
========================================================== */

function initializeNavigation(){

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",event=>{

            event.preventDefault();

            const target = document.querySelector(

                link.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ==========================================================
   Buttons
========================================================== */

function initializeButtons(){

    const resumeButton =
        document.getElementById("resumeBtn");

    const contactButton =
        document.getElementById("contactBtn");

    if(resumeButton){

        resumeButton.addEventListener("click",()=>{

            document
                .getElementById("about")
                .scrollIntoView({

                    behavior:"smooth"

                });

        });

    }

    if(contactButton){

        contactButton.addEventListener("click",()=>{

            document
                .getElementById("contact")
                .scrollIntoView({

                    behavior:"smooth"

                });

        });

    }

}

/* ==========================================================
   Keyboard Shortcuts
========================================================== */

function initializeKeyboardShortcuts(){

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape"){

            document
                .getElementById("themePanel")
                .classList.add("hidden");

            document
                .getElementById("downloadPanel")
                .classList.add("hidden");

        }

    });

}

/* ==========================================================
   Settings
========================================================== */

function restoreSettings(){

    const savedTheme =
        localStorage.getItem("ResumeOSTheme");

    if(savedTheme){

        ResumeOS.settings.theme = savedTheme;

    }

}

/* ==========================================================
   Future APIs
========================================================== */

function enableAnimations(){

    console.log("Animations Enabled");

}

function disableAnimations(){

    console.log("Animations Disabled");

}

function enableDarkMode(){

    console.log("Dark Mode Enabled");

}

function enableLightMode(){

    console.log("Light Mode Enabled");

}

function showNotification(message){

    console.log(message);

}

/* ==========================================================
   End
========================================================== */
