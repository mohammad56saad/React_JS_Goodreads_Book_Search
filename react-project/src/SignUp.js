import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate();
  let storedAccounts;



  const handleSubmit = async e => {
    e.preventDefault()
    const emailRegex = /\./;

    if (emailRegex.test(email)) {
      if (password === cPassword) {
        await fetch('http://localhost:8000/accounts')
          .then((res) => res.json())
          .then((data) => {
            storedAccounts = data;
          });

        const accountFound = storedAccounts.find((account) => account.email === email)

        if (accountFound) {
          alert("Account already registered! Try a difference account.")
          return
        }

        const account = { email, password }
        fetch('http://localhost:8000/accounts', {
          method: 'POST',
          headers: { "Content-Type": 'application/json' },
          body: JSON.stringify(account)
        }).then(() => {
          setSuccess(true)

          setTimeout(() => {
            navigate('/')
          }, 1000)
        });
      } else {
        alert('The Password & Confirm-Password are not the same!')
      }
    } else {
      alert("The Email is missing the \".\" character!")
    }
  }

  return (
    <div className='sign-up'>
      <i class='bi bi-box-arrow-in-right'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='currentColor'
          class='bi bi-box-arrow-in-right'
          viewBox='0 0 16 16'
          color='red'
        >
          <path
            fill-rule='evenodd'
            d='M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z'
          />
          <path
            fill-rule='evenodd'
            d='M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z'
          />
        </svg>
      </i>
      {!success && <p>Sign Up</p>}
      {success && <p>You have signed up successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='xyz@gmail.com' id='name' onChange={(e) => { setEmail(e.target.value) }} required />
        <input type='password' placeholder='Password' id='password' onChange={(e) => { setPassword(e.target.value) }} minLength="8" required />
        <input
          type='password'
          placeholder='Confirm Password'
          id='confirm-password'
          onChange={(e) => { setCPassword(e.target.value) }}
          minLength="8"
          required

        />

        {!success && <button>SignUp</button>}
        {success && <button disabled style={{ "cursor": 'not-allowed' }}>Signing Up ...</button>}
      </form>
      <Link to="./">Back to Login Page</Link>
    </div>
  )
}

export default SignUp
