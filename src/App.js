import React from "react";
import { useState } from "react";
import generatePDF from "./generatePDF";
import printFile from "./printFile";
import Modal from "./Modal";
import "./App.css";

import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Publications from "./components/Publications";
import ProfessionalAffiliations from "./components/ProfessionalAffiliations";
import InputComponent from "./Input";
// import  from "";

function App() {
  // eslint-disable-next-line no-unused-expressions
  generatePDF;
  // eslint-disable-next-line no-unused-expressions
  printFile;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [name, setName] = useState("Name Surname");
  const [address, setAddress] = useState("Poland , Warshaw");

  return (
    <div className="App">
      <button onClick={openModal} className="button">
        Open Modal
      </button>

      <Modal show={showModal} onClose={closeModal}>
        <div>
          {/* Header inputs start */}
          <InputComponent text={name} setText={setName} placeholder="Name" />
          <InputComponent
            text={address}
            setText={setAddress}
            placeholder="Address"
          />

          {/* Header inputs end */}
        </div>
      </Modal>

      <h1> CV Example</h1>
      <div id="content">
        <Header name={name} address={address} />

        <ProfessionalSummary />
        <ProfessionalExperience />
        <Skills />
        <Certifications />
        <Publications />
        <ProfessionalAffiliations />
      </div>
      <button id="generate-pdf" onClick={generatePDF}>
        Generate PDF
      </button>

      <button id="print-document" onClick={printFile}>
        Print Document
      </button>
    </div>
  );
}

export default App;
