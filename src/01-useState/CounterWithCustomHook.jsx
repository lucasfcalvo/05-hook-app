import {useCounter} from '../hooks/useCounter'
export const CounterWithCustomHook = () => {
    const{counter }= useCounter()
    return (
    <>
    <h1>counter with Hook: {counter}</h1>
    <hr />
    <button className="btn">+1</button>
    <button className="btn">Reset</button>

    <button className="btn">-1</button>
    </>
  )
}
