import './App.css'

function App() {

  const containerSTY = {
    width: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    paddingTop: '10px',
    paddingLeft: '30px',
    paddingRight: '20px',
    borderRadius: '15px',
    backgroundColor: "#48e00c",
    height: '538px'
  }

  const headerSTY = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'sans-serif'
  }

  const logoSty = {
    fontSize: '20px',
    fontWeight: '900'
  }

  const navSty  = {
    display: 'flex',
    listStyle: 'none',
    gap: '50px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'sans-serif'
  }

  const buttonSty = {
    border: '2px solid black',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'sans-serif'
  }

  const bodySTY = {
    paddingLeft: '90px',
    paddingRight: '80px',
    display: 'flex'
  }

  const btnSty = {
    border: '1px solid black',
    backgroundColor: 'green',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'sans-serif',
    padding: '10px'
  }

  const descSTY = {
    fontSize: '60px',
    fontWeight: 'bolder',
    fontFamily: 'sans-serif'
  }

  const descriptionSTY = {
    fontSize: '20px',
    fontWeight: '400',
    fontFamily: 'sans-serif',
    color: '#1b8f03',
    marginTop: '-40px',
    marginBottom: '35px'
  }

  const imgSTY = {
    width: '450px',
    marginTop: '50px',    
  }

  return (
    <>
      <div className="container" style={containerSTY}>
        <header style={headerSTY}>
          <div className="logo">
            <p style={logoSty}>Kreed</p>
          </div>
          <div className="nav" style={navSty}>
            <ul style={navSty}>
              <li>Home</li>
              <li>About us</li>
              <li>Locations</li>
              <li>FAQ</li>
            </ul>
            <button style={buttonSty} >Contact us</button>
          </div>
        </header>
        <div className='body' style={bodySTY}>
          <div className="desc">
            <div className="title">
              <p style={descSTY}>Love and <br /> kindness are <br /> never wasted.</p>
            </div>
            <div className="description">
              <p style={descriptionSTY}>We help around 1,00,000+ cats and kittens every year <br /> thanks in no small part to our network of over 200+ <br /> volunteer-run branches.</p>
            </div>
            <div className="btn">
              <button style={btnSty}>Join us</button>
            </div>
          </div>
          <div className="image">
            <img style={imgSTY} src="../image 1.svg" alt="rasm"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
