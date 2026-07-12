/* ==========================================================
   ResumeOS
   Download Engine
========================================================== */

const downloadButton =
    document.getElementById("downloadButton");

const downloadPanel =
    document.getElementById("downloadPanel");

const htmlButton =
    document.getElementById("downloadHTML");

const pdfButton =
    document.getElementById("downloadPDF");

const printButton =
    document.getElementById("printResume");

/* ========================================================== */
/* Open / Close Panel */
/* ========================================================== */

downloadButton.addEventListener("click",()=>{

    downloadPanel.classList.toggle("hidden");

});

/* ========================================================== */
/* Download HTML */
/* ========================================================== */

htmlButton.addEventListener("click",()=>{

    const html =
        document.documentElement.outerHTML;

    const blob =
        new Blob([html],{

            type:"text/html"

        });

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download = "resume.html";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    downloadPanel.classList.add("hidden");

});

/* ========================================================== */
/* Print */
/* ========================================================== */

printButton.addEventListener("click",()=>{

    downloadPanel.classList.add("hidden");

    window.print();

});

/* ========================================================== */
/* PDF */
/* ========================================================== */

pdfButton.addEventListener("click",()=>{

    downloadPanel.classList.add("hidden");

    window.print();

});

/* ========================================================== */
/* Close Popup */
/* ========================================================== */

window.addEventListener("click",(event)=>{

    if(event.target===downloadPanel){

        downloadPanel.classList.add("hidden");

    }

});
