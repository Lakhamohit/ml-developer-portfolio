/* ==========================================================
   ResumeOS
   Animation Engine
========================================================== */

"use strict";

/* ==========================================================
   Fade In Animation
========================================================== */

const observerOptions = {

    threshold:0.15,

    rootMargin:"0px 0px -50px 0px"

};

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},observerOptions);

/* ==========================================================
   Observe Elements
========================================================== */

function initializeAnimations(){

    const elements = document.querySelectorAll(

        "section, .card"

    );

    elements.forEach(element=>{

        element.classList.add("hidden-element");

        observer.observe(element);

    });

}

/* ==========================================================
   Scroll Progress Bar
========================================================== */

function createProgressBar(){

    const progress = document.createElement("div");

    progress.id = "scrollProgress";

    document.body.appendChild(progress);

}

function updateProgressBar(){

    const progress = document.getElementById("scrollProgress");

    if(!progress) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        (scrollTop/documentHeight)*100;

    progress.style.width = percentage+"%";

}

/* ==========================================================
   Back To Top Button
========================================================== */

function createBackToTop(){

    const button = document.createElement("button");

    button.id = "backToTop";

    button.innerHTML = "↑";

    document.body.appendChild(button);

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

function toggleBackToTop(){

    const button =
        document.getElementById("backToTop");

    if(!button) return;

    if(window.scrollY>500){

        button.classList.add("visible");

    }

    else{

        button.classList.remove("visible");

    }

}

/* ==========================================================
   Scroll Events
========================================================== */

window.addEventListener("scroll",()=>{

    updateProgressBar();

    toggleBackToTop();

});

/* ==========================================================
   Initialize
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    createProgressBar();

    createBackToTop();

    initializeAnimations();

});
