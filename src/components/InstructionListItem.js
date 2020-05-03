import React from 'react'

export default ({ label, explanation, completed, timer, timeRemaining }) => (
  <li>
    <label>
      <input type="checkbox" />{label}
    </label>
    <div className="explanation">{explanation}</div>
  </li>
)