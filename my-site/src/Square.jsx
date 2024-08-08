import { useState } from 'react';


function Square({value, onSquareClick}) {

  return (
    <button className="square border-2 border-white border-solid w-24 h-24 font-poppins text-7xl" onClick={onSquareClick} >
      {value}
    </button>
  );
}

export default Square;
