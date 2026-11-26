import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
// import Cards from './Cards'
import Profile from './Components/Profile'
import UseState from './Components/UseState'
import ArithemeticOperations from './Components/ArithemeticOperations'
import IncrementAndDecrement from './Components/IncrementAndDecrement'
import Navbar from './DoctorsTemplate/Navbar'
import Cards from './DoctorsTemplate/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Header></Header>
   <h1>Welcome</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil voluptatem rerum, temporibus, exercitationem fugit laboriosam quia explicabo nostrum commodi at et recusandae dicta consequatur ea maiores totam soluta assumenda aperiam ad eum. Quis nobis, unde at tenetur eligendi provident molestiae dignissimos amet sapiente? Velit perferendis commodi animi sequi nemo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, officia totam mollitia perferendis voluptate accusantium cum consequuntur iure, saepe necessitatibus numquam. Laudantium, sint voluptates nobis consequatur facere autem. Quas explicabo fugiat, dolor architecto quae nostrum repellat? Distinctio, eum molestias optio, maiores quia libero, minima ea eveniet quaerat ratione cupiditate . Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsam inventore suscipit id voluptas rerum totam distinctio non rem harum amet quos quo, praesentium accusantium voluptates quod velit dicta eos, hic deleniti. Ratione rerum repudiandae veniam nesciunt numquam. Facilis voluptatem itaque cumque repellat assumenda odio vel distinctio officiis ratione numquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere nihil corrupti quo eum totam libero cum sit quidem id nostrum alias, quae dolorum nesciunt! Quasi necessitatibus eum culpa sed asperiores repellat officia tenetur dignissimos nemo iste a, facilis libero natus sapiente assumenda, laudantium fugit obcaecati recusandae maxime animi porro.</p>
   <Footer></Footer> */}
   {/* <div className='cards'>
    <Cards/>
    <Cards/>
    <Cards/>
   </div> */}
   {/* <Profile></Profile> */}
   {/* <UseState></UseState> */}
   {/* <ArithemeticOperations></ArithemeticOperations>
   <IncrementAndDecrement></IncrementAndDecrement> */}
   <div>
    <Navbar></Navbar>
  <div className='cardContainer'>
   <Cards></Cards>
   <Cards></Cards>
   <Cards></Cards>
   <Cards></Cards>
  </div>
  </div>
  </div>
  
 /* <div className='lastcard'>
  <Cards></Cards>
   </div> */
   
  )
}

export default App
