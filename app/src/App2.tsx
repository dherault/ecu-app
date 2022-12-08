// ecu-file-id 8txd0jvsM
import { useState } from 'react'

import CoolDiv2 from './components/CoolDiv2'
import CoolDaddy from './components/CoolDaddy'

const onetwothree = [1, 2, 3]

// ecu-function-id 0pmQZMibKj
function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>A div!</div>
      <p>A p!</p>
      <button
        type="button"
        onClick={() => setCount(x => x + 1)}>
        {count}
      </button>
      <button
        type="button"
        onClick={() => console.log('a log')}>
        A log button!
      </button>
      <button
        type="button"
        onClick={() => console.warn('a log')}>
        A warn button!
      </button>
      <button
        type="button"
        onClick={() => console.error('a log')}>
        An error button!
      </button>
      <button
        type="button"
        onClick={() => console.debug('a log')}>
        A debug button!
      </button>
      <CoolDiv2 />
      <CoolDaddy>
        Child
        <CoolDiv2 />
      </CoolDaddy>
      <div>~</div>
      {onetwothree.map(x => <div key={x}>~</div>)}
      <div>~</div>
      {[...Array(count).keys()].map(x => <div key={x}>{x + 1}</div>)}
      <div>~</div>
    </>
  )
}

export default App
