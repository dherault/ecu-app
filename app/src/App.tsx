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
      <Text data-ecu="_D_wClNl0v:0">
        Edit me I'm a text!
      </Text>
      <CoolDiv />
      <CoolDiv />
      <Text data-ecu="_D_wClNl0v:1">App!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
