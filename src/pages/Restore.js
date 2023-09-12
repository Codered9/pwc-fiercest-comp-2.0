import React, { useState } from 'react';

export default function Restore() {
  const [formData, setFormData] = useState({
    name: '', 
  });

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const containerStyle = {
    maxWidth: '500px', 
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    color:'black'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    color:'black'
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    color:'black'
  };

  const header = {
    color : 'black',
    maxWidth: '500px', 
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    
  }

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };
  return (
    <div style={containerStyle}>
        <h1 style={header}>Restore</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name" style={labelStyle}>
          Name of Repo:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={inputStyle}

          required
        />
        <br />
        <label htmlFor="encryptionKey" style={labelStyle}>
          ParseKey:
        </label>
        <input
          type="password"
          id="encryptionKey"
          name="encryptionKey"
          value={formData.encryptionKey}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <br />
        <button type="submit" style={buttonStyle}>
            Download
          </button>
      </form>
    </div>
  );
}
