import { useEffect, useState } from "react"

const ExampleUseEffectHook = () => {

    const [val, setVal] = useState('OFF');
    const [btnVal, changeBtnVal] = useState(false);

    useEffect(()=>{
        setVal(btnVal === false ? 'OFF' : 'ON')
    },[btnVal])
    
  return (
    <>
        <h1> Use Effect Val:{val}</h1>
        <button onClick={() => changeBtnVal(!btnVal)}>{val}</button>
    </>
  )
}

export default ExampleUseEffectHook
