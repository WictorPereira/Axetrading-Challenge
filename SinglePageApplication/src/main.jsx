import React, { useState } from 'react'; // Combinei as importações
import ReactDOM from 'react-dom/client';

import Header from './Components/Header.jsx';
import Form1 from './Components/Form1.jsx';
import Form2 from './Components/Form2.jsx';
import Table from './Components/Table.jsx';
import './index.css';

function MainApp() {
  const [editableData, setEditableData] = useState(null);

  const handleEdit = (file) => {
    setEditableData(file);
  };

  const handleClearEditableData = () => {
    setEditableData(null);
  };

  return (
    <React.StrictMode>
      <Header />
      <div className='form-container'>
        <Form1 />
        <Form2 editableData={editableData} onClearEditableData={handleClearEditableData} />
      </div>
      <Table onEdit={handleEdit} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);
