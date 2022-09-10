import './App.css';
import MenuList from './components/MenuList';

const itemsList = [


  {id: 1,
  imgUrl: "https://recipes.timesofindia.com/thumb/msid-54308405,width-1600,height-900/54308405.jpg",
nameofdish: "Chicken Dum Biryani"},

{id: 2,
  imgUrl: "https://recipes.timesofindia.com/thumb/msid-54308405,width-1600,height-900/54308405.jpg",
nameofdish: "Prawns Dum Biryani"},

{id: 3,
  imgUrl: "https://recipes.timesofindia.com/thumb/msid-54308405,width-1600,height-900/54308405.jpg",
nameofdish: "Mutton Dum Biryani"},

{id: 4,
  imgUrl: "https://recipes.timesofindia.com/thumb/msid-54308405,width-1600,height-900/54308405.jpg",
nameofdish: "Chicken Dum Biryani"},



]



const App = () => <MenuList itemsList = {itemsList}/>

export default App;
