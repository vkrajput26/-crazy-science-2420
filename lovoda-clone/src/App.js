
// import Productpage from './Pages/Productpage';


import "./App.css";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import CheckoutPg from "./Pages/CheckoutPg";

// import CheckoutPg from "./Pages/CheckoutPg";

// import Home from "./Pages/Home";


function App() {
  return (
    <div className="App">

     {/* <Navbar />
    <AllRoutes />
    <Footer /> */}


      <Navbar/>
      {/* <Productpage/> */}

      <AllRoutes/>
    <Footer />

    </div>
  );
}

export default App;
