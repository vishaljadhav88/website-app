
import './App.css';
import './index.css'
import Mainpage from './Components/Mainpage';
import { Route,Routes } from 'react-router-dom';
// import MealInfo from './Components/MealInfo';
// import MealCards from './components/MealCards';

function App() {
  return (
   
    // <Mainpage />
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:MealId' element={<MealInfo/>} />
      </Routes>
   
  );
}

export default App;

