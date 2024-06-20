import React, { useState } from "react";
import "./Form1.css";

function Form1() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      // Ler o conteúdo do arquivo como texto para contar os caracteres
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const count = content.length;
        setCharCount(count);
      };
      reader.readAsText(file);
    } else {
      setCharCount(0);
    }
  };

  // Evento do botão para enviar os dados do arquivo para o db.json
  function btnImport(event) {
    event.preventDefault();

    if (!selectedFile) {
      console.log("Nenhum arquivo selecionado.");
      return;
    }

    const fileDetails = {
      extension: selectedFile.name.split(".").pop(),
      count: charCount,
      filesize: selectedFile.size,
    };

    fetch("http://localhost:5000/arquivos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fileDetails),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Erro ao enviar os dados.");
        }
        return resp.json();
      })
      .then((data) => {
        console.log("Dados enviados com sucesso:", data);
      })
      .catch((err) => console.log("Erro ao enviar os dados:", err));
  }

  return (
    <div className="div-forms">
      <form className="form">
        <h1 className="h1-title">Add by importing JSON file</h1>
        <h4 className="h4-choose">Choose a file</h4>
        <input
          className="file-input"
          type="file"
          accept=".json"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <div className="div-p-results">
            <p className="p-results">
              Extensão do arquivo: {selectedFile.name}
            </p>
            <p className="p-results">Count: {charCount} caracteres</p>
            <p className="p-results">filesize: {selectedFile.size} bytes</p>
          </div>
        )}

        <button className="btn-import" onClick={btnImport}>
          Import
        </button>
      </form>
    </div>
  );
}

export default Form1;
