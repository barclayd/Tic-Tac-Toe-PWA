import { Component, OnInit } from '@angular/core';
import { Player } from '../types/player';

const NUMBER_OF_SQUARES = 9;
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares!: (Player | undefined)[];
  xIsNext!: boolean;
  winner: Player | undefined;

  ngOnInit() {
    this.setupGame();
  }

  setupGame() {
    this.squares = Array(NUMBER_OF_SQUARES).fill(undefined);
    this.xIsNext = Math.random() >= 0.5;
    this.winner = undefined;
  }

  get currentPlayer(): Player {
    return this.xIsNext ? 'X' : 'O';
  }

  get isGameFinished() {
    return !this.squares.includes(undefined);
  }

  get isNoWinner() {
    return this.isGameFinished && !this.winner;
  }

  get didStartGame() {
    return this.squares.some((square) => square === 'X' || square === 'O');
  }

  makeMove(index: number) {
    if (this.winner) {
      return;
    }
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.currentPlayer);
      this.xIsNext = !this.xIsNext;
      this.calculateWinner();
    }
  }

  calculateWinner() {
    lines.forEach((line) => {
      const [a, b, c] = line;
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.winner = this.squares[a] as Player;
      }
    });
  }
}
