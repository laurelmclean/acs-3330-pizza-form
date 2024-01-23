import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [pepperoni, setPepperoni] = useState(false)
  const [pepper, setPepper] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [onions, setOnions] = useState(false)

  return (
    <div className="App">
      <h1>Pizza Order</h1>
      <div className='pizza-order'>
      <div className='form'>
          <input
            type="text"
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        <label>
          <input
            type="checkbox"
            checked={pepperoni}
            onChange={() => setPepperoni(!pepperoni)}
          />
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            checked={sausage}
            onChange={() => setSausage(!sausage)}
          />
          Sausage
        </label>
        <label>
          <input
            type="checkbox"
            checked={pepper}
            onChange={() => setPepper(!pepper)}
          />
          Pepper
        </label>
        <label>
          <input
            type="checkbox"
            checked={onions}
            onChange={() => setOnions(!onions)}
          />
          Onions
        </label>
        <button>Submit</button>
      </div>
      <div className='order'>
        <h2>Your Order</h2>
        {name !== '' && <h3>{name}</h3>}
        {pepperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {pepper && <div>Pepper</div>}
        {onions && <div>Onions</div>}
      </div>
      </div>
    </div>
  );
}

export default App;
