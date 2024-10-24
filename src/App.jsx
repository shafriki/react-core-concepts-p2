import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

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
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
      <button onClick={clickMe} className='btn'>click me</button>
      <button onDoubleClick={handleClick} className='btn-2'>Click me 2x</button>
      <button onClick={ () => toAdd(5)} className='btn-3'>Add Number</button>
    </>
  )
}

export default App
