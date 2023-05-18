import React from 'react'
import {Rutas} from '../'

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route  path="login" element={<LoginPage/>} />

            <Route path="/principal" element={<Rutas/>} />
        </Routes>
    </>
  )
}
