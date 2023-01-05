import React, { useState } from "react";
import DisplayIdeas from "./components/DisplayIdeas";
import IdeasForm from "./components/IdeasForm";


function App() {
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ]);

  const addIdeas = (newIdeas) => {
    setIdeas([...ideas, newIdeas])
    console.log(newIdeas)
  }

  // Notes on data flow:
  // Our app utilizes state twice. There is state on the parent to handle the inverse dataflow and state on the child to handle the input. The local state calls the function (props.addIdeas(input)) passed as a prop from the parent compontent which changes the parent's state. Because of this, the sibling compontent (DisplayIdeas) is able to access the new data from the App parent.


  return (
    <main>
      <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>

      <br />

      <DisplayIdeas ideas={ideas}/>
      
      <h1>Submit your ideas down below:</h1>

      <IdeasForm addIdeas={addIdeas}></IdeasForm>


    </main>
  );
}

export default App;