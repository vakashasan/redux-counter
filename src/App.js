import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddCounterAction, MinusCounterAction } from './store/actions/counter';

function App() {
  const dispatch = useDispatch();
  const globalcounter = useSelector( (state) => state.globalcounter)

  const addcounter = () => {
    dispatch(AddCounterAction())
  }

  const minuscounter = () => {
    dispatch(MinusCounterAction())
  }



  return (
    <div className="App">

    <h1> Counter </h1>
    <h2> {globalcounter} </h2>
    <button onClick={ addcounter }> + </button>
    <button onClick={ minuscounter}> - </button>
    

    </div>
  );
}

export default App;
