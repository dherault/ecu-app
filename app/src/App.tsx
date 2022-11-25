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
        data-ecu="MSKSwXPBKk:0">
        <Text // ecu-display-name Text!
          data-ecu="MSKSwXPBKk:0_0">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text data-ecu="MSKSwXPBKk:1">Foo!</Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text data-ecu="MSKSwXPBKk:2">
        {'1\n2\n3\n4'}
      </Text>
      <Text data-ecu="MSKSwXPBKk:3">Foo!</Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLong
      />
      <Text data-ecu="MSKSwXPBKk:4">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="MSKSwXPBKk:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
