import React, { useState } from "react";


import FunctionalComponent1 from "./components/FunctionalComponent1";
import FunctionalComponent2 from "./components/FunctionalComponent2";
import FunctionalComponent3 from "./components/FunctionalComponent3";
import ClassComponent1 from "./components/ClassComponent1";
import ClassComponent2 from "./components/ClassComponent2";
import ClassComponent3 from "./components/ClassComponent3";

function App() {
  const [name, setName] = useState("Manon");

  const handleChange = (event) => {
    setName(event.target.value);
  };


  const [text, setText] = useState("Manon");

  const handleChange2 = (event) => {
    setText(event.target.value);

  }



  return (
    <>
      <h1>React opdrachten week 10</h1>
      <div className="assignments-container">
        <div className="assignment1-container">
          <h2>1. Componenten, JSX en ReactDom</h2>

          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />
            <FunctionalComponent1 nameProp={name}/>
            <ClassComponent1 nameProp={name}/>
         
          <hr />

            <FunctionalComponent2 />
            <ClassComponent2 />
        </div>

        <h2>2. Controlled Components en Shared State </h2>
      
            <ClassComponent3 textProp={text} handleChange2={handleChange2}/>
            <FunctionalComponent3 textProp={text} handleChange2={handleChange2}/>
       
         
      
     

        </div>
      
    </>
  );
}





export default App;






  //2. shared state opdracht
  // function SharedStateFunctionalComponent() {
  //   return <h3>Hello Functional {name}! </h3>;
  // }

  // class SharedStateClassComponent extends React.Component {
  //   render() {
  //     return <h3>Hello Class {name}!</h3>;
  //   }
  // }










//gebleven bij minuut 13:00 to do app

// function App() {
//   const [name, setName] = useState("Manon");

//   const handleChange = (event) => {
//       setName(event.target.value)
//   };

//   return (
//   <>
//     <input type="text" onChange={handleChange}/>

//     <h1>{name}</h1>
//   </>
//   )
// }
