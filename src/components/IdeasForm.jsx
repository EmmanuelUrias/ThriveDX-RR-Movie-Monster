import React, { useState } from "react";

function IdeasForm (props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() // prevents the default of submit, which basically prevents the page from refreshing
        props.addIdeas(input)
    }
    //Mistake: We made this handleSubmit function but never invoked it, we fixed it by invoking it in the form properties

  return(
    <div>
        <form onSubmit={handleSubmit}>       
            <h1>IdeasForm</h1>
            <input type='text' onChange={(e) => setInput(e.target.value)}></input>
             <button type="submit">Submit Your Idea!</button>
      </form>

    </div>
  )
}

export default IdeasForm
