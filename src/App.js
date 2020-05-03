import React from 'react'
import './App.css'

import instructions from './instructions'
import InstructionList from './components/InstructionList'

export default () => {
  const { steps } = instructions
  return (
    <div className="App">
      <h1>James Hoffmann’s V60 pour over coffee brewer technique</h1>
      <InstructionList steps={steps} />
    </div>
  )
}