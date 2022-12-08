// ecu-file-id 8txd0jvsM
import CoolDiv2 from './components/CoolDiv2'
import CoolDaddy from './components/CoolDaddy'

// ecu-function-id 0pmQZMibKj
function App() {
  return (
    <>
      <div>A div!</div>
      <p>A p!</p>
      <button
        type="button"
        onClick={() => console.log('a log')}
      >
        A log button!
      </button>
      <button
        type="button"
        onClick={() => console.warn('a log')}
      >
        A warn button!
      </button>
      <button
        type="button"
        onClick={() => console.error('a log')}
      >
        An error button!
      </button>
      <button
        type="button"
        onClick={() => console.debug('a log')}
      >
        A debug button!
      </button>
      <CoolDiv2 />
      <CoolDaddy>
        Child
        <CoolDiv2 />
      </CoolDaddy>
    </>
  )
}

export default App
