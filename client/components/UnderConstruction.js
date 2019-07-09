import React from 'react'

const Construction = () => {
  return (
    <div id='under-construction'>
      <h1>Features Under Construction</h1>
      <p>In no particular order:</p>
      <ul>
        <li>Keyword Search</li>
        <li>Search by Date</li>
        <li>View Questions by Tag</li>
        <li>View 5 Random Questions</li>
        <li>Suggestion Box</li>
        <li>Display today's question on homepage</li>
      </ul>
      <br />
      <br />
      <h2>Behind-the-Scenes Features Under Development</h2>
      <ul>
        <li>Implementing Facebook's API</li>
        <li>Writing a script to update database daily</li>
      </ul>
      <h2>Stretch Goals</h2>
      <ul>
        <li>Search/Filter by Number of Comments</li>
        <li>Twitter Bot (tweeting text of used questions)</li>
      </ul>
    </div>
  )
}

export default Construction
