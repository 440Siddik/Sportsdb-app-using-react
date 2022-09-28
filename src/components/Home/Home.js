import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'
const Home = () => {
  const [search , setSearch] = useState ("")
  const [players , setPlayers] = useState ([])
  const [cart , setCart] = useState([])
  useEffect(()=>{
    fetch (`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
    .then(res => res.json())
    .then(data => {
      setPlayers(data?.player);
    })
  },[search])


  return (
    <div className='home-container'>
      <div className="left-side">
        <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' />
        <button className='search-btn'>Search</button>
        <div className="players-container">
          <Players players={players} cart={cart} setCart={setCart}></Players>
        </div>
      </div>
      <div className="right-side">
        <div className="cart">
        <h1>This is Carts</h1>
        {
          cart.map((p) => 
            <li>{p.idPlayer}</li>)
        }
        </div>
      </div>
    </div>
  );
};

export default Home;