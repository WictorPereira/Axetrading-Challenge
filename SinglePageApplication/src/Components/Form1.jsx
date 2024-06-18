import './Form1.css'
import React, { useState} from 'react';


function Form1 () {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
  const file = e.target.files[0]
    setSelectedFile(file);

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

         <button className='btn-import'>Import</button>   
         
         
             
    </form>
    </div>
  )
}


export default Form1