import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'
const Players = ({players, cart ,setCart}) => {
  return (
    <div className='card-container'>
    {
      players.map(Splayer => <SinglePlayer Splayer = {Splayer} key = {Splayer.idPlayer} cart={cart} setCart={setCart}></SinglePlayer>)
    }
    </div>
  );
};

export default Players;