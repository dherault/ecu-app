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

function App(props: AppPropsType) {
  return (
    <>
      <Text data-ecu="-dhHA4b8dY:0">Edit me I'm a Text</Text>
      <Div // ecu-display-name Container
        data-ecu="-dhHA4b8dY:1">
        <Div
          className="flex-0"
          data-ecu="-dhHA4b8dY:1_0">
          <Text data-ecu="-dhHA4b8dY:1_0_0">Edit me I'm a Text</Text>
          <Text data-ecu="-dhHA4b8dY:1_0_1">Edit me I'm a Text</Text>
          <Text data-ecu="-dhHA4b8dY:1_0_2">Edit me I'm a Text</Text>
          <Text data-ecu="-dhHA4b8dY:1_0_3">Edit me I'm a Text</Text>
        </Div>
        <Text // ecu-display-name Text!
          className="width"
          data-ecu="-dhHA4b8dY:1_1">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="center"
        data-ecu="-dhHA4b8dY:2">
        Red className
      </Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="height-overflow"
        data-ecu="-dhHA4b8dY:3">
        {'1\n2\n3\n4\n5\n6'}
      </Text>
      <Text data-ecu="-dhHA4b8dY:4">
        Emoji className
      </Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text data-ecu="-dhHA4b8dY:5">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="-dhHA4b8dY:6">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
