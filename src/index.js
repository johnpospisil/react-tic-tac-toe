import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class Square extends React.Component {
    constructor(props) {
        // In JavaScript classes, you need to always call super when defining the 
        // constructor of a subclass. All React component classes that have a 
        // constructor should start it with a 'super(props)' call.
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        return (
            <button
                className="square" 
                // onClick, setState of 'value' in this Square to 'X'
                onClick={() => this.setState({value: 'X'})}
            >
            {/* show the 'state' of the 'value' in each Square */}
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        // pass a prop(erty) called 'value' to Square
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
