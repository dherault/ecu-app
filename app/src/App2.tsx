// ecu-file-id 8txd0jvsM
import CoolDiv2 from './components/CoolDiv2'
import CoolDaddy from './components/CoolDaddy'

// ecu-function-id 0pmQZMibKj
function App() {
  return (
    <>
      <div>A div!</div>
      <p>A p!</p>
      <button type="button">A button!</button>
      <CoolDiv2 />
      <CoolDaddy>
        Child
      </CoolDaddy>
    </>
  )
}

export default App
