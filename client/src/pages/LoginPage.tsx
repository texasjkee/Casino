import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PATHES } from '../routes/pathes'
import { useLoginMutation } from '../entities/_user/_user'

type TForm = {
  email: string
  password: string
}

export const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const [login] = useLoginMutation()

  const onChange = (fieldName: keyof TForm, value: string) => {
    setForm({
      ...form,
      [fieldName]: value
    })
  }

  const onLogin = () => {
    login(form)
    const auth = localStorage.getItem('isAuth')
    if (auth) {
      navigate(PATHES.POSTS)
    }
  }
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-4'>
      <div className='text-xl'>Login Page</div>
      <div className='flex flex-col gap-2 w-[300px]'></div>
      <div>
        <input
          className='border p-2 w-full'
          value={form.email}
          onChange={e => onChange('email', e.target.value)}
          placeholder='Email'
        />
      </div>
      <div>
        <input
          className='border p-2 w-full'
          value={form.password}
          onChange={e => onChange('password', e.target.value)}
          placeholder='Password'
        />
      </div>
      <button className='bg-blue-300 p-2' onClick={onLogin}>
        Login
      </button>
      <Link className='text-center text-sm' to={PATHES.REGISTER}>
        Register now
      </Link>
    </div>
  )
}
