/* ==========================================================
   ResumeOS
   Download Engine
========================================================== */

const downloadButton =
    document.getElementById("downloadButton");

const downloadPanel =
    document.getElementById("downloadPanel");

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

/* ==========================================================
   Close Button
========================================================== */

document
.getElementById("closeExport")
.addEventListener("click",()=>{

    downloadPanel.classList.add("hidden");

});
/* ========================================================== */
/* Close Popup */
/* ========================================================== */

window.addEventListener("click",(event)=>{

    if(event.target===downloadPanel){

        downloadPanel.classList.add("hidden");

    }

});
