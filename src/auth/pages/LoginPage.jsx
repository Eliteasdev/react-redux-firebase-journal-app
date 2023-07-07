import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import Google from '@mui/icons-material/Google'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLaout } from '../layout/AuthLaout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {
  const { status } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const { email, password, onInputChange, formState } = useForm({
    email: 'fernando@google.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault()
    console.log({ email, password })
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLaout title="Login">
      <form onSubmit={onSubmit}>
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth name="email" onChange={onInputChange} value={email}/>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="Contraseña" type="password" placeholder="contraseña" fullWidth name="password" onChange={onInputChange} value={password}/>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={12} sm={6}>
                <Button disabled={isAuthenticating}
                type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Link component={RouterLink} color="inherit" to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>

            </Grid>

          </Grid>
        </form>
    </AuthLaout>
  )
}
