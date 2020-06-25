import React, {useState} from 'react'
import * as R from 'ramda'

const mapIndexed = R.addIndex(R.map);

export const Board = props => {
  const [state, setState] = useState(props.game);
  const handleCellClick = e => setState(state.mark(Number(e.target.dataset["cellNr"])));

  return <div className="board">
      {
        mapIndexed((cellContent, i) =>
          <Cell
            key={i}
            cellNr={i}
            onClick={handleCellClick}
            owner={cellContent}
          />
          , state.fields)
      }
    </div>;
};

export const Cell = ({ owner = '', cellNr, onClick } = { owner: '' }) =>
   <button
    className={`cell cell_${cellNr}`}
    data-cell-nr={cellNr}
    onClick={onClick}>
    {owner}
  </button>;

export class TicTacToe {
  constructor(fields, currentPlayer = 'X') {
    this.fields = fields;
    this.currentPlayer = currentPlayer;
  };

  static startWithSize(width, height) {
    return new TicTacToe(Array(width * height).fill(" "));
  }

  oppositePlayer(player) {
    return player === 'X' ? 'O' : 'X';
  }

  toString() { return this.fields.join('') };

  mark(cellNr) {
    if (R.nth(cellNr, this.fields) !== ' ') return this;

    return new TicTacToe(
      R.update(cellNr, this.currentPlayer, this.fields),
      this.oppositePlayer(this.currentPlayer)
    );
  }
}