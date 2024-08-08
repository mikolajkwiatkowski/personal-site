import Kafelek from './Kafelek.jsx'
import Square from './Square.jsx'
import { useState } from 'react';
function TicTacToe() {

  const [squares, setSquares] = useState(Array(9).fill(null));  
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i]) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    console.log(nextSquares);
  }


  return (
    <div className="content">
      <div className="flex flex-grow">
        <div className="w-full h-maincontent m-5">
          <Kafelek bg='bg-neutral-900'>
            <div className='border-solid border-2 rounded-3xl  border-white '>
              <div className="board-row flex">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
              </div>
              <div className="board-row flex">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
              </div>
              <div className="board-row flex">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
              </div>
            </div>
          </Kafelek>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
