import useMyHook from "./UseMyHook";

const MyHook = () => {
    const {
        result, number, onButtonPressed
    } = useMyHook()
    return (
        <div>
            <h2>result: {result}</h2>
            <div>
                <button onClick={() => onButtonPressed('9')}>9</button>
                <button onClick={() => onButtonPressed('8')}>8</button>
                <button onClick={() => onButtonPressed('7')}>7</button>
                <button onClick={() => onButtonPressed('+')}>+</button>
            </div>
            <div>
                <button onClick={() => onButtonPressed('6')}>6</button>
                <button onClick={() => onButtonPressed('5')}>5</button>
                <button onClick={() => onButtonPressed('4')}>4</button>
                <button onClick={() => onButtonPressed('-')}>-</button>
            </div>
            <div>
                <button onClick={() => onButtonPressed('3')}>3</button>
                <button onClick={() => onButtonPressed('2')}>2</button>
                <button onClick={() => onButtonPressed('1')}>1</button>
                <button onClick={() => onButtonPressed('*')}>x</button>
            </div>
            <div>
                <button onClick={() => onButtonPressed('0')}>0</button>
                <button onClick={() => onButtonPressed('C')}>C</button>
                <button onClick={() => onButtonPressed('=')}>=</button>
                <button onClick={() => onButtonPressed('/')}>/</button>
            </div>
        </div>
    )
}
export default MyHook;