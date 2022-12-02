import { Div, Text } from 'ecu'

import ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong from './components/ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong'
/* --
  * IMPORTS START
-- */
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
The app, splendid!!
*/
/* --
  * DESCRIPTION END
-- */

function App(props: AppPropsType) {
  return (
    <>
      <Div // ecu-display-name Container
        data-ecu="T-AZ_57oyix:0">
        <Text // ecu-display-name Text!
          className="width"
          data-ecu="T-AZ_57oyix:0_0">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="center"
        data-ecu="T-AZ_57oyix:1">
        Red className
      </Text>
      
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="height-overflow center"
        data-ecu="T-AZ_57oyix:2">
        {'1\n2\n3\n4\n5\n6'}
      </Text>
      <Text data-ecu="T-AZ_57oyix:3">
        Emoji class
      </Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text data-ecu="T-AZ_57oyix:4">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="T-AZ_57oyix:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
