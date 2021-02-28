import React ,{useState, } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Card from './components/Card';
import Cover from './components/Cover';
import Dropdown from './components/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const  [isOpen, setIsOpen]=useState(false);
  const [restaurant, setRestaurant] = useState({});

  const toggle = () => {
  setIsOpen(!isOpen)
}

const onSelectedRestaurant = (r) => {
  setRestaurant(r);
}


  return (
    <>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Cover onSelected={onSelectedRestaurant}/>
     <Card {...restaurant}/>  
     <Footer/>
    </>
  );
}

export default App;
