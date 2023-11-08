import { useEffect } from 'react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar/Navbar';
import { funFetchAllTags, funGenerateRandomQoute } from './redux/actions';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(funGenerateRandomQoute());
    dispatch(funFetchAllTags());
  },[])

  return (
    <div className="App">
       <Navbar />
       <AllRoutes />
    </div>
  );
}

export default App;
