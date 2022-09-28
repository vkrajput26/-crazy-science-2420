import './App.css';
import Navbar from './Components/Navbar';
// import AllRoutes from './Pages/AllRoutes';
import Productpage from './Pages/Productpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AllRoutes/> */}
      <Productpage/>
    </div>
  );
}

export default App;
