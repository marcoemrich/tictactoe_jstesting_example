import React from "react";
import ReactDOM from "react-dom";
import {Board, Cell, TicTacToe} from './components/cell'


const App = document.getElementById("app");

ReactDOM.render(<Board game={TicTacToe.startWithSize(3, 3)} />, App);
