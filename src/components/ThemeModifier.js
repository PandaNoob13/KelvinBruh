import { useEffect, useState } from "react"

const ThemeModifier = (props) => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        document.title = `Theme ${dark ? 'black' : 'white'}`
        return () => {
            console.log('Component wiill unmount');
        }
    })
    return (
        <div style={{backgroundColor: dark ? 'black' : 'white'}}>
            <p style={{color: dark ? 'white' : 'black'}}>color: {dark ? 'white' : 'black'}</p>
            <button onClick={() => setDark(!dark)}>
                Set Theme {dark ? 'white' : 'black'}
            </button>
            <button onClick={props.onNavigate}>Go to dummy view</button>
        </div>
    )
}
export default ThemeModifier;