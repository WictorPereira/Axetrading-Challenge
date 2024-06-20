import "./Table.css";

import React, { useState, useEffect } from "react";

function Results() {
  const [files, setFiles] = useState([]);

  //buscando arquivos db.json
  useEffect(() => {
    fetch("http://localhost:5000/arquivos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar arquivos");
        }
        return response.json();
      })
      .then((data) => {
        setFiles(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar arquivos", error);
      });
  }, [files]); // Executar apenas uma vez após a montagem do componente

  // Verifica se files ainda está vazio ou indefined
  if (!files || files.length === 0) {
    return (
      <p className="p-table">
        Add new data by importing it from a file or filling in the fields above!
      </p>
    );
  }

  function removeFiles(id) {
    fetch(`http://localhost:5000/arquivos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Erro ao deletar o arquivo");
        }

        setFiles(files.filter((file) => file.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <ul className="ul-results">
      {files.map((file, index) => (
        <li key={index} className="li-results">
          <span>{file.extension}</span>
          <span>{file.count}</span>
          <span>{file.filesize}</span>
          <div className="div-btns-results">
            <button className="btn-edit">Edit</button>
            <button className="btn-delete" onClick={() => removeFiles(file.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Results;
