import Link from "next/link";

export default function Welcome() {
  

  const containerStyle = {
    maxWidth: '500px', 
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
  };

  const innerContainerStyle = {
    maxWidth: '500px', 
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'black',
    color : 'white'
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

  return (

      <div style={containerStyle}>


            <h1 style={header}>Welcome</h1>

            <ul>
              <li>
              <Link href='/Backup'>
                <div style={innerContainerStyle}>
                
                  Backup
                </div>
                </Link>
              </li>
              
              <li>
              <Link href='/Restore'>
                <div style={innerContainerStyle}>
               
                  Restore
                </div>
                </Link>
              </li>
            </ul>
      </div>
  );
}
