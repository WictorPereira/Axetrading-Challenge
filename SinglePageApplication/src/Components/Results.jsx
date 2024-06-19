import "./Table.css";

import React, { useState, useEffect } from "react";


function Results() {
  const [files, setFiles] = useState([]);

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
  }, [files]);// Executar apenas uma vez após a montagem do componente

  // Verifica se files ainda está vazio ou indefined
  if (!files || files.length === 0) {
    return (
        <p className="p-table">
          Add new data by importing it from a file or filling in the fields above!
        </p>
    )
  }
    return (
      
      <ul className="ul-results">
        {files.map((file, index) => (
          <li key={index} 
              className="li-results"> 
              <span>{file.name}</span> 
              <span>{file.lastModified}</span>
              <span>{file.size}</span>
              <div className="div-btns-results">
                <button className='btn-edit'>Edit</button> 
                <button className='btn-delete'>Delete</button> 
              </div>
              </li>
        ))}
      </ul>
    );
  }

export default Results;

/*<li className='li-results'>Nome do arquivo: </li>
            <li className='li-results'>Última modificação:</li>
            <li className='li-results'>Tamanho do arquivo:</li>
            <li className='li-results'>
            <button className='btn-edit'>Edit</button> 
            <button className='btn-delete'>Delete</button> 
            */
