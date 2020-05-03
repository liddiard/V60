import React, { useState } from 'react'

import InstructionListItem from './InstructionListItem'

export default ({ steps }) => {
  const [stepIndex, setStepIndex] = useState(0)
  return (
    <ul>
      {steps.map(instruction =>
        <InstructionListItem {...instruction} />)}
    </ul>
  )
}