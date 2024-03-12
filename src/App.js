//import { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const tasksState = useSelector(state => state.tasks);console.log(tasksState);
 // const [showModal, setShowModal] = useState(false);

  const handleBottonClick = () => {
    console.log("2"); 
  };

  return (
    <div className="App">
      <h1>Hola v1.1.2</h1>
      <button onClick={() => handleBottonClick()}>Comprobar</button>
    </div>
  );
}

export default App;
