import React from 'react'

function DisplayIdeas(props) {
    let crazyIdeas = props.ideas.map((idea, i) => <li key={i}>{idea}</li>)
    // Mistake: Put the index in the idea being display in the html rather than passing it as a key in the li properties.

    return (
        <div>
            <ul>{crazyIdeas}</ul>
        </div>
    )
}

export default DisplayIdeas