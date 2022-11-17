/* --
  * IMPORTS START
-- */
import { Text } from 'ecu'

import DualCoolDivs from './components/DualCoolDivs'
import CoolDiv from './components/CoolDiv'

/* --
  * IMPORTS END
-- */
/* --
  * TYPES START
-- */
type AppPropsType = Record<string, never>;
/* --
  * TYPES END
-- */

function App(props: AppPropsType) {
  return (
    <>
      <Text data-ecu="liPz3SHBxY:0">Then double click here</Text>
      
      
      
      
      
      
      <CoolDiv />
      
  <Text data-ecu="liPz3SHBxY:1">First double click here</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
