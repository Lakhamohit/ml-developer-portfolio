/* ==========================================================
   ResumeOS
   Renderer Module
========================================================== */

let resume = {};

document.addEventListener("DOMContentLoaded", loadResume);

async function loadResume() {

    try {

        const response = await fetch("resume.json");

        resume = await response.json();

        renderHero();

        renderAbout();

        renderExperience();

        renderEducation();

        renderSkills();

        renderLanguages();

        renderContact();

    }

    catch (error) {

        console.error("Unable to load resume.json");

        console.error(error);

    }

}

/* ========================================================== */

function renderHero(){

    document.getElementById("heroName").textContent =
        resume.profile.name;

    document.getElementById("heroTitle").textContent =
        resume.profile.headline;

    document.getElementById("heroSummary").textContent =
        resume.summary;

}

/* ========================================================== */

function renderAbout(){

    const container = document.getElementById("aboutContainer");

    container.innerHTML = `
        <div class="card">
            <p>${resume.summary}</p>
        </div>
    `;

}

/* ========================================================== */

function renderExperience(){

    const container =
        document.getElementById("experienceContainer");

    container.innerHTML = "";

    resume.experience.forEach(job=>{

        container.innerHTML += `

        <div class="card">

            <h3>${job.role}</h3>

            <strong>${job.company}</strong>

            <p>${job.duration}</p>

            <p>${job.location}</p>

            <p>${job.description}</p>

        </div>

        `;

    });

}

/* ========================================================== */

function renderEducation(){

    const container =
        document.getElementById("educationContainer");

    container.innerHTML = "";

    resume.education.forEach(item=>{

        container.innerHTML += `

        <div class="card">

            <h3>${item.degree}</h3>

            <p>${item.college}</p>

            <p>${item.year}</p>

            <p>CGPA : ${item.cgpa}</p>

        </div>

        `;

    });

}

/* ========================================================== */

function renderSkills(){

    const container =
        document.getElementById("skillsContainer");

    container.innerHTML = "";

    container.innerHTML += `
        <div class="grid">
    `;

    resume.skills.technical.forEach(skill=>{

        container.innerHTML += `
            <div class="card">
                ${skill}
            </div>
        `;

    });

    resume.skills.soft.forEach(skill=>{

        container.innerHTML += `
            <div class="card">
                ${skill}
            </div>
        `;

    });

    container.innerHTML += `
        </div>
    `;

}

/* ========================================================== */

function renderLanguages(){

    const container =
        document.getElementById("languageContainer");

    container.innerHTML = "";

    resume.languages.forEach(language=>{

        container.innerHTML += `

        <div class="card">

            ${language}

        </div>

        `;

    });

}

/* ========================================================== */

function renderContact(){

    const container =
        document.getElementById("contactContainer");

    container.innerHTML = `

    <div class="card">

        <h3>${resume.profile.name}</h3>

        <p>${resume.profile.location}</p>

        <p>

            <a href="mailto:${resume.profile.email}">
                ${resume.profile.email}
            </a>

        </p>

        <p>

            <a href="${resume.social.portfolio}" target="_blank">
                Portfolio
            </a>

        </p>

        <p>

            <a href="${resume.social.linkedin}" target="_blank">
                LinkedIn
            </a>

        </p>

        <p>

            <a href="${resume.social.github}" target="_blank">
                GitHub
            </a>

        </p>

    </div>

    `;

}
