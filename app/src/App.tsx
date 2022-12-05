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
function App(props: AppPropsType) {
  return (
    <>
      <Text data-ecu="ZU2pYPalY:0">Edit me I'm a Text</Text>
      <Div
        className="grid"
        data-ecu="ZU2pYPalY:1">
        <Text data-ecu="ZU2pYPalY:1_0">Edit me I'm a Text 1</Text>
        <Text data-ecu="ZU2pYPalY:1_1">Edit me I'm a Text 2</Text>
        <Text data-ecu="ZU2pYPalY:1_2">Edit me I'm a Text</Text>
      </Div>
      <Div // ecu-display-name Container
        data-ecu="ZU2pYPalY:2">
        <Div
          className="flex-0"
          data-ecu="ZU2pYPalY:2_0">
          <Text data-ecu="ZU2pYPalY:2_0_0">Text 1</Text>
          <Text data-ecu="ZU2pYPalY:2_0_1">Text 2</Text>
          <Text data-ecu="ZU2pYPalY:2_0_2">Text 3</Text>
          <Text data-ecu="ZU2pYPalY:2_0_3">Text 4</Text>
        </Div>
        <Text // ecu-display-name Text!
          className="width"
          data-ecu="ZU2pYPalY:2_1">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="center"
        data-ecu="ZU2pYPalY:3">
        Red className
      </Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="height-overflow"
        data-ecu="ZU2pYPalY:4">
        {'1\n2\n3\n4\n5\n6'}
      </Text>
      <Text data-ecu="ZU2pYPalY:5">
        Emoji className
      </Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text data-ecu="ZU2pYPalY:6">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="ZU2pYPalY:7">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
