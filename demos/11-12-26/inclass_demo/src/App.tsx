import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

type TypeProps = {
  title: String;
  subtitle: String;
}

const Title = ({ title, subtitle }: TypeProps) => {
  return (<>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </>
  )
}

function App() {
  const handleButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hello");
  }

  return (
    <>
      <Title title={"Hello, World"} subtitle={"Nov 12"}></Title>
      <button onClick={handleButtonClick}>Click me!</button>
    </>
  )
}

export default App
