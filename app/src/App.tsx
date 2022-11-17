import { Text } from 'ecu'

import DualCoolDivs from './components/DualCoolDivs'
import CoolDiv from './components/CoolDiv'
/* --
  * IMPORTS START
-- */

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
      <Text data-ecu="p3woPDZQq8:0">
        Edit me I'm a text!
      </Text>
      <CoolDiv />
      <Text data-ecu="p3woPDZQq8:1">!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
