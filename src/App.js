import React from "react";
import html2pdf from "html2pdf.js";
import "./App.css";

const App = () => {
  const handleGeneratePDF = () => {
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

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="App">
      <h1>React PDF Generation Example</h1>
      <div id="content">
        <header>
          <h1>[Your Name]</h1>
          <p>[Your Address]</p>
          <p>[City, State, ZIP Code]</p>
          <p>
            Email: <a href="mailto:[Email Address]">[Email Address]</a>
          </p>
          <p>
            Phone: <a href="tel:[Phone Number]">[Phone Number]</a>
          </p>
          <p>
            <a href="[LinkedIn Profile]">LinkedIn Profile</a> |{" "}
            <a href="[Website/Portfolio]">Website/Portfolio</a>
          </p>
        </header>

        <section>
          <h2>Professional Summary</h2>
          <p>
            Highly motivated and experienced [Your Profession] with over
            [Number] years of experience in [Your Industry]. Proven track record
            in [mention specific skills or achievements]. Seeking to leverage
            expertise in [specific area] to contribute to the success of
            [Company Name].
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            <strong>[Degree] in [Major]</strong>
          </p>
          <p>[University Name], [City, State]</p>
          <p>[Month, Year] – [Month, Year]</p>
          <ul>
            <li>Relevant coursework: [List relevant courses]</li>
            <li>Thesis/Project: [Title/Description]</li>
          </ul>
        </section>

        <section>
          <h2>Professional Experience</h2>
          <div class="job">
            <p>
              <strong>[Job Title]</strong>
            </p>
            <p>[Company Name], [City, State]</p>
            <p>[Month, Year] – [Month, Year]</p>
            <ul>
              <li>[Responsibility/Achievement #1]</li>
              <li>[Responsibility/Achievement #2]</li>
              <li>[Responsibility/Achievement #3]</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>Technical Skills: [List technical skills]</li>
            <li>Soft Skills: [List soft skills]</li>
            <li>Languages: [List languages spoken]</li>
          </ul>
        </section>

        <section>
          <h2>Certifications</h2>
          <ul>
            <li>[Certification Name], [Issuing Organization], [Month, Year]</li>
            <li>[Certification Name], [Issuing Organization], [Month, Year]</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <p>
            <strong>[Project Title]</strong>
          </p>
          <p>
            [Brief Description of the project, technologies used, and your role
            in the project]
          </p>
        </section>

        <section>
          <h2>Publications</h2>
          <p>
            <strong>[Title of Publication]</strong>
          </p>
          <p>[Journal/Conference Name], [Month, Year]</p>
          <p>[Brief Description]</p>
        </section>

        <section>
          <h2>Professional Affiliations</h2>
          <ul>
            <li>
              [Organization Name], [Position], [Month, Year] – [Month, Year]
            </li>
            <li>
              [Organization Name], [Position], [Month, Year] – [Month, Year]
            </li>
          </ul>
        </section>
      </div>
      <button id="generate-pdf" onClick={handleGeneratePDF}>
        Generate PDF
      </button>

      <button id="print-document" onClick={handlePrint}>
        Print Document
      </button>
    </div>
  );
};

export default App;
