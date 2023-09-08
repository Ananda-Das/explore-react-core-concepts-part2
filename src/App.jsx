import './App.css'
import Users from './Users'
import Counter from './counter'

function App() {

  function handleClick(){
    alert('button Clicked')
  }
  const handleClick2 = () => {
    alert('button 2 click')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Counter></Counter>
      <Users></Users>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
