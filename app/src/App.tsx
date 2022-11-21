/* --
  * IMPORTS START
-- */
import { Div, Text } from 'ecu'

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
1f300
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
      <Div data-ecu="bPO8puWJxw:0">
        <Text data-ecu="bPO8puWJxw:0_0">:D</Text>
        <Text data-ecu="bPO8puWJxw:0_1">Edit me I'm a Text</Text>
      </Div>
      <Text data-ecu="bPO8puWJxw:1">! :) :)</Text>
      <Text data-ecu="bPO8puWJxw:2">!!</Text>
      <Text data-ecu="bPO8puWJxw:3">First double click here</Text>
      <Text data-ecu="bPO8puWJxw:4">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="bPO8puWJxw:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
