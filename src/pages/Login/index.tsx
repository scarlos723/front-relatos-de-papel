import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useUserStore } from '../../store/user'
import type { LoginFormValues } from './types'
import { ROUTES } from '../../constants/routes'

export const Login = () => {

  const formValues: LoginFormValues = {
    email: '',
    password: '',
  }

  const [values, setValues] = useState<LoginFormValues>(formValues)
  const [error, setError] = useState<LoginFormValues>(formValues)
  const { setTokens } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    validateForm()
  }, [values])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newError: LoginFormValues = formValues
    const { email, password } = values

    if(!email.includes('@') || !email.includes('.')) newError.email = 'Email inválido'
    if(email.length === 0) newError.email = 'El email es requerido'

    if(password.length === 0) newError.password = 'La contraseña es requerida'

    setError(newError)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(Object.values(error).some((err) => err !== '')) return

    // TODO: Llamar API
    console.log('Form data:', values)
    setTokens('accessToken', 'refreshToken')
    // ------

    navigate(ROUTES.CATALOG)
  }

  return (
    <form className="container py-16 flex flex-col gap-4" onSubmit={handleSubmit} >
      <Input id='email' label='Email' type='email' error={error.email} onChange={onChange}/>
      <Input id='password' label='Contraseña' type='password' error={error.password} onChange={onChange}/>
      <div className="w-full flex justify-center">
        <Button
          type="submit"
          variant="primary"
          className="w-max"
          size="lg"
        >
          Iniciar Sesión
        </Button>
      </div>
    </form>
  )
}
