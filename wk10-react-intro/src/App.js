// //Opdracht 1.1, 1.2 en 2.1 =======================================================

// import React, { useState } from "react";

// import FunctionalGreeting1 from "./components/FunctionalGreeting1";
// import FunctionalGreeting2 from "./components/FunctionalGreeting2";
// import FunctionalGreeting3 from "./components/FunctionalGreeting3";
// import ClassGreeting1 from "./components/ClassGreeting1";
// import ClassGreeting2 from "./components/ClassGreeting2";
// import ClassGreeting3 from "./components/ClassGreeting3";

// function App() {
//   //opdracht 1 stap 1
//   const [name, setName] = useState("Manon");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   //opdracht 2 
//   const [text, setText] = useState("Manon");

//   const handleChange2 = (event) => {
//     setText(event.target.value);

//   }

//   return (
//     <>
//       <h1>React opdrachten week 10</h1>
//       <div className="assignments-container">

//         <div className="subassignment-container">
//           <h2>1. Componenten, JSX en ReactDom</h2>

//           <input
//             type="text"
//             placeholder="Enter your name"
//             onChange={handleChange}
//           />
//             <FunctionalGreeting1 nameProp={name}/>
//             <ClassGreeting1 nameProp={name}/>
         
//           <hr />

//             <FunctionalGreeting2 />
//             <ClassGreeting2 />
//         </div>

//         <h2>2. Controlled Components en Shared State </h2>
        
//           <FunctionalGreeting3 textProp={text} handleChange2={handleChange2}/>
//           <ClassGreeting3 textProp={text} handleChange2={handleChange2}/>
       
//           </div>
//           </>
//   );
// }
//  export default App;


//   //opdracht 3 ==============================================================================
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Name from './components/Name';

function App() {
  const [names, setNames] = useState([]);

  function handleInput() {
      let input = document.querySelector('input')
      
      setNames(prevState => {
          let state = [...prevState]
          state.unshift(input.value)
          console.log(state)
          return state
      })
  };

console.log(names.map(nameFromMap => <div key={uuidv4()} >{nameFromMap}</div>))

  return (
    
      <div className="assignments-container">
        <h2>3. Lists en Keys </h2>
          <input id="input" />
          <button onClick={handleInput}>Submit Name</button>     
          {names.map(nameFromMap => <Name nameFromMap={nameFromMap}/>)}
      </div>
  );
}

export default App;

// // // Opdracht 4 



