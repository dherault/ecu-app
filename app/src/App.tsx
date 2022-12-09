// ecu-file-id 8txd0jvsM
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import CoolDiv from './components/CoolDiv'
import CoolDaddy from './components/CoolDaddy'

const onetwothree = [1, 2, 3]

// ecu-function-id 7EylnAleqA
function useCustomHook(n: number) {
  return useMemo(() => n * n, [n])
}
const onehundredantwentythree = 123

const falsy = false

// ecu-function-id 0pmQZMibKj
function App() {
  const [count, setCount] = useState(1)

  // const memoedValue = useMemo(() => 123, [])
  // const fromCustomHookValue = useCustomHook(12)

  // function logMe() {
  //   console.log('I will return')

  //   return true
  // }

  // const renderCount = useCallback(() => (
  //   <div>
  //     I was rendered by a useCallback:
  //     {' '}
  //     {count}
  //   </div>
  // ), [count])

  // function renderSomething() {
  //   return (
  //     <div>I was rendered by a regular function</div>
  //   )
  // }
  // const renderSomeDiv2 = useCallback(() => {
  //   if (count % 2) return null
  //   if (count % 2 === 1) return 'I was rendered by a useCallback on some count'

  //   return (
  //     <div>I was rendered by a useCallback on even count</div>
  //   )
  // }, [count])

  // useEffect(() => {
  //   console.log('I\'m within a useEffect')
  // }, [])

  if (falsy) {
    return (
      <div>Will you see me?</div>
    )
  }

  return (
    <>
      <p>A p!</p>
      Some raw text
      <div>
        <div>
          <div>
            A div within a div within a div
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setCount(x => x + 1)}
      >
        The count is 
        {' '}
        {count}
      </button>
    </>
  )
}

/*
<p>A p!</p>
      Some raw text
      <div>
        <div>
          <div>
            A div within a div within a div
          </div>
        </div>
      </div>
*/
/*
  `

*/
/*
{renderSomeDiv()}
      {renderSomeDiv2()}

      <div>
        Here is a value from a custom hook:
        {' '}
        {fromCustomHookValue}
      </div>
      <button
        type="button"
        onClick={() => setCount(x => x + 1)}
      >
        {count}
      </button>
      <button
        type="button"
        onClick={() => console.log('a log')}
      >
        A log button!
      </button>
      <button
        type="button"
        onClick={logMe}
      >
        A function button!
      </button>
      <CoolDiv />
      <CoolDaddy>
        Child
        <CoolDiv />
      </CoolDaddy>
      <div>~</div>
      {onetwothree.map(x => <div key={x}>~</div>)}
      <div>~</div>
      {[...Array(count).keys()].map(x => <div key={x}>{x + 1}</div>)}
*/

export default App
