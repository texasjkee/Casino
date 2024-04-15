import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PATHES } from '../routes/pathes'
import { useRegisterMutation } from '../entities/_user/_user'

type TForm = {
  email: string
  password: string
  repeat_password: string
}

export const RegisterPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeat_password: ''
  })

  const [register] = useRegisterMutation()

  const onChange = (fieldName: keyof TForm, value: string) => {
    setForm({
      ...form,
      [fieldName]: value
    })
  }

  const onLogin = () => register(form)

  return (
    <div className='h-screen flex justify-center items-center flex-col gap-4'>
      <div className='text-xl'>Registration Page</div>
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
      <div>
        <input
          className='border p-2 w-full'
          value={form.repeat_password}
          onChange={e => onChange('repeat_password', e.target.value)}
          placeholder='Repeat password'
        />
      </div>
      <button className='bg-blue-300 p-2' onClick={onLogin}>
        Registration
      </button>
      <Link className='text-center text-sm' to={PATHES.LOGIN}>
        Have account? Log in
      </Link>
    </div>
  )
}
