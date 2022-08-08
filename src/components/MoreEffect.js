import { useEffect, useState } from "react";
import { useDeps } from "../context/depContext";

const MoreEffect = () => {
    const {moreEffectService: {doPrint}} = useDeps();
    // const [result, setResult] = useState()
    // useEffect(() => {
    //     setResult(doPrint('1'))
    //     console.log('1');
    // }, [])
    // return(
    //     <>
    //         <h1>Print: {result}</h1>
    //     </>
    // )

    const [result, setResult] = useState('')
    const [id, setId] = useState('')
    useEffect(() => {
        setResult(doPrint(id))
        return(() => console.log('call'))
        //deps => mengatur kapan use effect dijalankan
    }, [id]) //Kalo hanya array kosong, ga jalan. Berarti, kalau ada perubahan id, akan dilakukan perubahan
    //Kalo gaada arraynya, dia bakal berubah tiap ada perubahan dari manapun.
    return (
        <>
            {/* <input type='text' value={id} onChange={(e)=> {
                setId(e.target.value)
            }}/> */}
            <button onClick={() => setId('10')}>Click</button>
            <h1>Print : {result}</h1>
        </>
    )
}
export default MoreEffect;