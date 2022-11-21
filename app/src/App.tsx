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
The app, splendid!!!
*/
/* --
  * DESCRIPTION END
-- */

function App(props: AppPropsType) {
  return (
    <>
      <Div data-ecu="1AZTVHUQn7:0">
        <Text data-ecu="1AZTVHUQn7:0_0">:D</Text>
      </Div>
      <Text data-ecu="1AZTVHUQn7:1">:)</Text>
      <Text data-ecu="1AZTVHUQn7:2">{'1\n2'}</Text>
      <Text data-ecu="1AZTVHUQn7:3">Foo!</Text>
      <Text data-ecu="1AZTVHUQn7:4">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="1AZTVHUQn7:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
