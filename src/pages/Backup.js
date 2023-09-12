import React, { useState } from 'react';

export default function BackUp() {
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    name : '',
    customRange3: 0,
    upload_file: null,
    backup_frequ: 'daily',
    encryptionKey: '',
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

  const header = {
    color : 'black',
    maxWidth: '500px', 
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (

      <div style={containerStyle}>
        <h1 style={header}></h1>
        <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="customRange3" style={labelStyle}>
            Name of Repo:
          </label>
          <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyle}
              />
          <br/> 
          <label htmlFor="customRange3" style={labelStyle}>
            BackUp Option:
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="9"
            step="1"
            id="customRange3"
            name="customRange3"
            value={formData.customRange3}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <p>{formData.customRange3}</p>
          <br />
          <input
            type="file"
            name="upload_file"
            onChange={handleInputChange}
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Backup frequency:</label>
          {/* Radio buttons here */}
          <label htmlFor="daily">daily</label>
          <input
            type="radio"
            name="backup_frequ"
            id="daily"
            value="daily"
            onChange={handleInputChange}
            checked={formData.backup_frequ === 'daily'}
          />
          <label htmlFor="weekly">weekly</label>
          <input
            type="radio"
            name="backup_frequ"
            id="weekly"
            value="weekly"
            onChange={handleInputChange}
            checked={formData.backup_frequ === 'weekly'}
          />
          <label htmlFor="monthly">monthly</label>
          <input
            type="radio"
            name="backup_frequ"
            id="monthly"
            value="monthly"
            onChange={handleInputChange}
            checked={formData.backup_frequ === 'monthly'}
          />
           <label htmlFor="none">none</label>
          <input
            type="radio"
            name="backup_frequ"
            id="none"
            value="none"
            onChange={handleInputChange}
            checked={formData.backup_frequ === 'none'}
          />
         
          <br />
          <button
            type="button"
            style={buttonStyle}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Encryption
          </button>
          <br />
          {toggle && (
            <div>
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
            </div>
          )}
          <br />
          <button type="submit" style={buttonStyle}>
            submit
          </button>
        </form>
      </div>
  );
}
