import './Form1.css'
import React, { useState } from 'react';


function Form1 () {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
  const file = e.target.files[0]
    setSelectedFile(file);
  }

  //Evento do botao envair o dados do arquivo para o db.json
  function btnImport (event) {
    event.preventDefault()

    if (!selectedFile) {
      console.log("Nenhum arquivo selecionado.")
      return;
    }

    const fileDetails = {
      name: selectedFile.name,
      lastModified: selectedFile.lastModified,
      size: selectedFile.size,
    }
    
    fetch("http://localhost:5000/arquivos",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:(JSON.stringify(fileDetails))
    }
  )
  .then((resp) => {
    if(!resp.ok) {
      throw new Error('Erro ao enviar os dados.')
    }
    return resp.json();
  })
  .then((data)=>{ console.log("Dados enviados com sucesso:", data)
  })
  .catch((err)=> console.log("Erro ao enviar os dados:", err))
  
}

  
  return(
    <div className='div-forms'>
      <form className="form">
          <h1 className='h1-title'>Add by importing JSON file</h1>
          <h4 className='h4-choose'>Choose a file</h4>
          <input 
            className='file-input' 
            type="file" 
            accept='.json'
            onChange={handleFileChange}
          />
          {selectedFile && (
          <div>         
            <p className='p-results'>Nome do arquivo: {selectedFile.name} </p>
            <p className='p-results'>Couts do arquivo: {selectedFile.lastModified}</p>
            <p className='p-results'>Tamanho do arquivo: {selectedFile.size} bytes </p>  
               
          </div>
          
        )}

         <button className='btn-import' onClick={btnImport}>Import</button>   
         
         
             
    </form>
    </div>
  )
}


export default Form1