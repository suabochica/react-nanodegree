import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        const valuesArray = this.makeNewQuestion();

        this.state = {
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer: valuesArray[3],
            answerWasCorrect: false
        }
    }

    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);

        return [value1, value2, value3, proposedAnswer];
    };

    updateState = (newValuesArray) => {
        this.setState((prevState) => ({
            value1: newValuesArray[0],
            value2: newValuesArray[1],
            value3: newValuesArray[2],
            proposedAnswer: newValuesArray[3]
        }));
    }

    handleAnswer = (event) => {
        const newValuesArray = this.makeNewQuestion();
        const answerWasCorrect = this.evaluateAnswer(event.target.name);

        this.updateState(newValuesArray);
        this.props.handleAnswer(answerWasCorrect);
    }

    evaluateAnswer = (givenAnswer) => {
        const {value1, value2, value3, proposedAnswer} = this.state;
        const correctAnswer = value1 + value2 + value3;

        return (
            (correctAnswer === proposedAnswer && givenAnswer === 'true') ||
            (correctAnswer !== proposedAnswer && givenAnswer === 'false')
        );
    }

    render() {
        const {value1, value2, value3, proposedAnswer} = this.state;

        return (
            <div>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <button
                    name="true"
                    onClick={this.handleAnswer}
                >
                    True
                </button>
                <button
                    name="false"
                    onClick={this.handleAnswer}
                >
                    False
                </button>
            </div>
        );
    }
}

export default Game;