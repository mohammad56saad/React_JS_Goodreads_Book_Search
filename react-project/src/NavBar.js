const NavBar = () => {
  return (
    <div className='nav-bar'>
      <a className="hamburger-menu">
        <i class='bi bi-list'></i>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-list'
          viewBox='0 0 16 16'
          color="white"
        >
          <path
            fill-rule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
          />
        </svg>
      </a>
      <h3>MSS Book Search</h3>
      <button>Home</button>
      <button>Login</button>
    </div>
  )
}

export default NavBar
