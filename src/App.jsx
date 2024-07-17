import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import BooksPage from './components/BooksPage/BooksPage'
import ItemContextProvider from './contexts/ItemContextProvider'

function App() {
 

  return (
    <>
      <div>
        
        <Header ></Header>
        <Card/>
        <ItemContextProvider>
        <BooksPage/>
        </ItemContextProvider>
      </div>
      
    </>
  )
}

export default App
