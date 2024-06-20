import "./Form2.css";
import React, { useState } from "react";

function Form2() {
  const [extension, setExtension] = useState("");
  const [count, setCount] = useState("");
  const [filesize, setFilesize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!extension || !count || !filesize) {
      alert("Preencha todos os campos");
      return;
    }

    const formData = {
      extension,
      count: parseInt(count), // Converting count to number
      filesize: parseInt(filesize), // Converting filesize to number
    };

    try {
      const response = await fetch("http://localhost:5000/arquivos", {
        method: "POST",
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
    } catch (error) {
      console.error("Error adding data:", error.message);
    }
  };

  return (
    <div className="div-forms">
      <form className="form2" onSubmit={handleSubmit}>
        <h1 className="h1-title2">Add data by filling in the fields</h1>

        <h4 className="h4-edits">Extension</h4>
        <input
          className="input-edit"
          type="text"
          placeholder="Ex: json,xml..."
          onChange={(e) => setExtension(e.target.value)}
        />

        <h4 className="h4-edits">Count</h4>
        <input
          className="input-editNum"
          type="number"
          placeholder="0"
          onChange={(e) => setCount(e.target.value)}
        />

        <h4 className="h4-edits">Filesize</h4>
        <input
          className="input-editNum"
          type="number"
          placeholder="0"
          onChange={(e) => setFilesize(e.target.value)}
        />

        <div className="div-btns">
          <button className="btn-cancel" type="reset">
            Cancel
          </button>
          <button className="btn-add" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form2;
