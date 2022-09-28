import React from 'react';
import './SinglePlayer.css';
const SinglePlayer = ({Splayer ,cart , setCart}) => {
  // console.log(Splayer);
  const { strPlayer, idPlayer, strCutout} = Splayer
  
  const handleAddToCart = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
    };
    if(cart){
      const newPlayer = [...cart ,info]
      setCart(newPlayer);
    }
  }

  const handleBookMark = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
      bookmark :'true'
    };
    const prevBookmark = localStorage.getItem('bookmarked');
    const oldBookMark = JSON.parse(prevBookmark)
    if (oldBookMark) {
      localStorage.setItem(
        "bookmarked",
        JSON.stringify([...oldBookMark, info])
      );
    } else {
      localStorage.setItem("bookmarked", JSON.stringify([info]));
    }
  }

  return (
    <div className='card'>
      <img className='player-img' src={strCutout} alt="" />
      <h3>Name : {strPlayer}</h3>
      <button className='card-btn'>Details</button>
      <button onClick={handleAddToCart} className='card-btn'>Add to cart</button>
      <button onClick={handleBookMark} className='card-btn'>Bookmark</button>
    </div>
  );
};

export default SinglePlayer;