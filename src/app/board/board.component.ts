import { Component, OnInit } from '@angular/core';

const NUMBER_OF_SQUARES = 9;
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
];
type player = 'X' | 'O';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class Board implements OnInit {
  squares!: (player | undefined)[];
  xIsNext!: boolean;
  winner: player | undefined;

  ngOnInit() {
    this.setupGame();
  }

  private setupGame() {
    this.squares = Array(NUMBER_OF_SQUARES).fill(undefined);
    this.xIsNext = true;
  }

  get currentPlayer(): player {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.currentPlayer);
      this.xIsNext = !this.xIsNext;
      this.calculateWinner();
      if (this.winner) {
        // we have a winner!
      }
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
        this.winner = this.squares[a] as player;
      }
    });
  }
}