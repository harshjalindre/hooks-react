import { useState } from 'react'

export const ExampleUsecaseHook = () => {
    const [exampleName, setExampleName] = useState('First Example');
    const changeVal = () => {
        setExampleName('Changed value');
    }
  return (
    <>
        <h1>This is {exampleName} of useSate</h1>
        <button onClick={changeVal}>Change UseState Value</button>
    </>
  )
}
