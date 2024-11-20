import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
