import { useEffect, useState } from "react"

const useMyHook = () => {
    const [result, setResult] = useState('');
    const [number, setNumber] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [prevOperator, setPrevOperator] = useState('');
    const onButtonPressed = (e) => {
        if (e == '+' || e == '-' || e == '*' || e == '/' || e == '='){
            if (result == ''){
                setResult(parseInt(number))
            } else {
                switch(prevOperator){
                    case '+':
                        add()
                        break;
                    case '-':
                        min()
                        break;
                    case '*':
                        mul()
                        break;
                    case '/':
                        div()
                        break;
                }
            }
            setNumber(0)
            setPrevOperator(e)
        } else {
            setUserInput(userInput + e)
            setNumber(number + e)
        }
        console.log(userInput);
        console.log(number);
    }
    const add = () => {
        setResult(result + parseInt(number))
    }
    const min = () => {
        setResult(result - parseInt(number))
    }
    const mul = () => {
        setResult(result * parseInt(number))
    }
    const div = () => [
        setResult(result / parseInt(number))
    ]
    return {
        result, number, onButtonPressed
    }
}
export default useMyHook;