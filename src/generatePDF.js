import html2pdf from "html2pdf.js";

const generatePDF = () => {
  const element = document.getElementById("content");

  // Set the options for html2pdf
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5], // margins in inches
    filename: "my_CV.pdf",
    image: { type: "jpeg", quality: 0.99 },
    html2canvas: {
      scale: 2,
      logging: true,
      dpi: 1200, // 2 * 96
      letterRendering: true,
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // control page breaks
  };

  // Generate the PDF

  html2pdf().from(element).set(opt).save();
};

export default generatePDF;
