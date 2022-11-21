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
      <Div data-ecu="dZL1Xh1Cuv:0">
        <Text data-ecu="dZL1Xh1Cuv:0_0">:D</Text>
      </Div>
      <Text data-ecu="dZL1Xh1Cuv:1">:)</Text>
      <Text data-ecu="dZL1Xh1Cuv:2">{'1\n2\n3\n4'}</Text>
      <Text data-ecu="dZL1Xh1Cuv:3">Oh oh oh!</Text>
      <Text data-ecu="dZL1Xh1Cuv:4">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="dZL1Xh1Cuv:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
