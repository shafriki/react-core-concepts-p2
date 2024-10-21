import './App.css'

function App() {

  function clickMe() {
    alert('hello world');
  }

  const handleClick = () => {
    alert('2x Click Working');
  }

  const toAdd = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <button onClick={clickMe} className='btn'>click me</button>
      <button onDoubleClick={handleClick} className='btn-2'>Click me 2x</button>
      <button onClick={ () => toAdd(5)} className='btn-3'>Add Number</button>
    </>
  )
}

export default App
