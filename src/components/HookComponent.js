import {useSelector, useDispatch} from 'react-redux'
import { hookSelector } from '../redux/hookSelector';
import { updateHook } from '../redux/hookAction';

export const HookComponent = () => {
    const num = useSelector(hookSelector);
    const dispatch = useDispatch()
    return(
        <>
            <div>{num}</div>
            <button onClick={() => dispatch(updateHook(num + 1))}>Update</button>
        </>
    )
}