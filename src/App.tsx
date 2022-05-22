import { useState } from 'react'
import './App.css'
import { CategoryHeaderMenu } from './componentes/CategoryHeaderMenu'
import { NavBar } from './componentes/NavBar'

function App() {
  const [category, setCategory] = useState('Gêneros');

  return (
    <>
      <NavBar/>
      <CategoryHeaderMenu mainText={category} />
    </>
  )
}

export default App
