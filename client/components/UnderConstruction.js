import React from 'react'

const Construction = () => {
  return (
    <div id='under-construction'>
      <h1>Features Under Construction</h1>
      <p>In no particular order:</p>
      <ul>
        <li>Keyword search</li>
        <li>Search by date</li>
        <li>View questions by tag</li>
        <li>View 5 random questions</li>
        <li>Suggestion box</li>
        <li>Display today's question on homepage</li>
      </ul>
      <h2>Stretch Goals</h2>
      <ul>
        <li>Implementing Facebook's API</li>
        <li>Writing a script to update database daily</li>
        <li>Admin tools for tagging questions newly input to database by script</li>
        <li>Admin tools for approving submitted questions into database (directly or with edits)</li>
        <li>Password-protected list of future questions, sorted by tag and keyword searchable</li>
        <li>Twitter bot (tweeting text of used questions)</li>
        <li>Search/Filter by number of comments</li>
      </ul>
    </div>
  )
}

export default Construction
