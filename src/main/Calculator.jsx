import { Component } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';

import './Calculator.css'

const initialValue = {
    displayValue: '0',
    answerValue: 0,
    clearDisplay: true,
    lastOperation: null
}

export default class Calculator extends Component {

    state = { ...initialValue }

    clearMemory = () => this.setState({ ...initialValue })

    setOperation = (operation) => {

        let { displayValue, answerValue } = this.state;
        displayValue = displayValue === '.' ? 0 : parseFloat(displayValue)

        switch (this.state.lastOperation) {
            case '+':
                answerValue += displayValue
                break
            case '-':
                answerValue -= displayValue
                break
            case '*':
                answerValue *= displayValue
                break
            case '/':
                answerValue /= displayValue
                break
            default:
                answerValue = displayValue
        }

        this.setState({
            answerValue,
            displayValue: answerValue.toString(),
            lastOperation: operation,
            clearDisplay: true,
        })
    }

    addDigit = (n) => {
        let { displayValue, clearDisplay } = this.state
        displayValue = (clearDisplay || displayValue === '0') ? '' : String(displayValue)

        if (n === '.' && displayValue.includes('.')) return

        displayValue += n
        this.setState({ displayValue, clearDisplay: false })
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={ this.state.displayValue } />
                <Button label='AC' click={ this.clearMemory } triple />
                <Button label='/' click={ this.setOperation } operation />
                <Button label='7' click={ this.addDigit } />
                <Button label='8' click={ this.addDigit } />
                <Button label='9' click={ this.addDigit } />
                <Button label='*' click={ this.setOperation } operation />
                <Button label='4' click={ this.addDigit } />
                <Button label='5' click={ this.addDigit } />
                <Button label='6' click={ this.addDigit } />
                <Button label='-' click={ this.setOperation } operation />
                <Button label='1' click={ this.addDigit } />
                <Button label='2' click={ this.addDigit } />
                <Button label='3' click={ this.addDigit } />
                <Button label='+' click={ this.setOperation } operation />
                <Button label='0' click={ this.addDigit } double />
                <Button label='.' click={ this.addDigit } />
                <Button label='=' click={ this.setOperation } operation />
            </div>
        )
    }

}