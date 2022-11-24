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
      <Div data-ecu="la53NIPkq6:0">
        <Text // ecu-display-name Text!
          data-ecu="la53NIPkq6:0_0">
          :D :D :D :D
        </Text>
      </Div>
      <Text data-ecu="la53NIPkq6:1">Foo!</Text>
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      
      
      
      
      
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <Text data-ecu="la53NIPkq6:2">
        {'1\n2\n3\n4'}
      </Text>
      <Text data-ecu="la53NIPkq6:3">Foo!</Text>
      <Text data-ecu="la53NIPkq6:4">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="la53NIPkq6:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
