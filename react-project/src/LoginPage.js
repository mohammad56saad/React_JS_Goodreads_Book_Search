const LoginPage = () => {
  return (
    <div className='login'>
      <i class='bi bi-file-lock-fill'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='currentColor'
          class='bi bi-file-lock-fill'
          viewBox='0 0 16 16'
          color='red'
        >
          <path d='M7 6a1 1 0 0 1 2 0v1H7zM6 8.3c0-.042.02-.107.105-.175A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7z' />
          <path d='M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0' />
        </svg>
      </i>
      <p>Log In</p>
      <form>
        <input type='email' placeholder='Email Address *' required />
        <input type='text' placeholder='Password *' required />
        <div>
          <input type='checkbox' id='remember' />
          <label htmlFor='remember'>Remember me</label>
        </div>
        <button>SIGN IN</button>
      </form>
      <div className="links">
        <a href='http://localhost:3000/'>Forgot Password?</a>
        <a href='http://localhost:3000/'>Don't have an account? Sign Up</a>
      </div>
    </div>
  )
}

export default LoginPage
