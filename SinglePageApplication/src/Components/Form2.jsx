import "./Form2.css";
import React, { useState, useEffect  } from "react";

function Form2({ editableData, onClearEditableData }) {
  const [extension, setExtension] = useState("");
  const [count, setCount] = useState("");
  const [filesize, setFilesize] = useState("");

  useEffect(() => {
    if (editableData) { 
      setExtension(editableData.extension);
      setCount(editableData.count);
      setFilesize(editableData.filesize);
    }
  }, [editableData]); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!extension || !count || !filesize) {
      alert("Preencha todos os campos");
      return;
    }

    const formData = {
      extension,
      count: parseInt(count), // Converting 
      filesize: parseInt(filesize), // Converting 
    };

    try {
      const response = await fetch (
        editableData ? `http://localhost:5000/arquivos/${editableData.id}` : "http://localhost:5000/arquivos", 
        {
        method: editableData ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add data");
      }
      console.log("Data added successfully");

      // Limpar os campos após o envio bem-sucedido
      setExtension("");
      setCount("");
      setFilesize("");
      onClearEditableData(); 
      alert('Successful addition')
      
    } catch (error) {
      console.error("Error adding data:", error.message);
    }
  };

  return (
    <div className="div-forms">
      <form className="form2" onSubmit={handleSubmit}>
        <h1 className="h1-title2">{editableData ? "Edit data" : "Add data"} by filling in the fields</h1>

        <h4 className="h4-edits">Extension</h4>
        <input
          className="input-edit"
          type="text"
          placeholder="Ex: json,xml..."
          value={extension}
          onChange={(e) => setExtension(e.target.value)}
        />

        <h4 className="h4-edits">Count</h4>
        <input
          className="input-editNum"
          type="number"
          placeholder="0"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <h4 className="h4-edits">Filesize</h4>
        <input
          className="input-editNum"
          type="number"
          placeholder="0"
          value={filesize}
          onChange={(e) => setFilesize(e.target.value)}
        />

        <div className="div-btns">
          <button className="btn-cancel" type="reset" onClick={onClearEditableData}>
            Cancel
          </button>
          <button className="btn-add" type="submit">
          {editableData ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form2;
