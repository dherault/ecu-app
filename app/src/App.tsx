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

/* --
  * EMOJI START
-- */
/*
:+1:
*/
/* --
  * EMOJI END
-- */
/* --
  * DESCRIPTION START
-- */
/*
The app, splendid!
*/
/* --
  * DESCRIPTION END
-- */

function App(props: AppPropsType) {
  return (
    <>
      <Text data-ecu="skvJXUOY1y:0">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="skvJXUOY1y:1">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
