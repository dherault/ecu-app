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
      <Div
    // ecu-display-name Container
        data-ecu="NNoWCUabHl:0"
      >
        <Text
      // ecu-display-name :D
          data-ecu="NNoWCUabHl:0_0"
        >
          :D :D :D
        </Text>
      </Div>
      <Text // ecu-display-name FooBarBaz
        data-ecu="NNoWCUabHl:1"
      >
        :)
      </Text>
      <CoolDiv />
      <CoolDiv />
      <Text data-ecu="NNoWCUabHl:2">{'1\n2\n3\n4'}</Text>
      <Text data-ecu="NNoWCUabHl:3">Foo!</Text>
      <Text data-ecu="NNoWCUabHl:4">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="NNoWCUabHl:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
