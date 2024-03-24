import './navbar.style.css'

function Navbar({handleChange, handleSubmit}) {
  return (
      <div className='search-box'>
       <form onChange={handleChange}>
        <input placeholder='Busqueda'></input>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
       </form>
      </div>
  )
}

export default Navbar