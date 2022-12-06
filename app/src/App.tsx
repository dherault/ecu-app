// ecu-file-id eHSY7bEvM
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

// ecu-function-id 4inI1VgNV
// ecu-function-id ZU2pYPalY
// ecu-function-id Ysm52JVO0
// ecu-function-id uyzr-dcQX
function App(props: AppPropsType) {
  return (
    <>
      <Text data-ecu="uyzr-dcQX:0">Edit me I'm a Text</Text>
      <Div
        className="grid"
        data-ecu="uyzr-dcQX:1">
        <Text data-ecu="uyzr-dcQX:1_0">Edit me I'm a Text 1</Text>
        <Text data-ecu="uyzr-dcQX:1_1">Edit me I'm a Text 2</Text>
        <Text data-ecu="uyzr-dcQX:1_2">Edit me I'm a Text 3</Text>
      </Div>
      <Div // ecu-display-name Container
        data-ecu="uyzr-dcQX:2">
        <Div
          className="flex-0"
          data-ecu="uyzr-dcQX:2_0">
          <Text data-ecu="uyzr-dcQX:2_0_0">Text 1</Text>
          <Text data-ecu="uyzr-dcQX:2_0_1">Text 2</Text>
          <Text data-ecu="uyzr-dcQX:2_0_2">Text 3</Text>
          <Text data-ecu="uyzr-dcQX:2_0_3">Text 4</Text>
        </Div>
        <Text // ecu-display-name Text!
          className="width"
          data-ecu="uyzr-dcQX:2_1">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="center"
        data-ecu="uyzr-dcQX:3">
        Red className
      </Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="height-overflow"
        data-ecu="uyzr-dcQX:4">
        {'1\n2\n3\n4\n5\n6'}
      </Text>
      <Text data-ecu="uyzr-dcQX:5">
        Emoji className
      </Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text data-ecu="uyzr-dcQX:6">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="uyzr-dcQX:7">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
