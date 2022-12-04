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
        data-ecu="SweUQqTwJBi:0">
        <Div
          className="flex-0"
          data-ecu="SweUQqTwJBi:0_0" />
        <Text // ecu-display-name Text!
          className="width"
          data-ecu="SweUQqTwJBi:0_2">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="center"
        data-ecu="SweUQqTwJBi:1">
        Red className
      </Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="height-overflow"
        data-ecu="SweUQqTwJBi:2">
        {'1\n2\n3\n4\n5\n6'}
      </Text>
      <Text data-ecu="SweUQqTwJBi:3">
        Emoji className
      </Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text data-ecu="SweUQqTwJBi:4">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="SweUQqTwJBi:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
