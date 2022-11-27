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
        data-ecu="LiXfnWkDts:0">
        <Text // ecu-display-name Text!
          data-ecu="LiXfnWkDts:0_0">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text
        className="foo baz"
        data-ecu="LiXfnWkDts:1">
        Foo className
      </Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="foo"
        data-ecu="LiXfnWkDts:2">
        {'1\n2\n3\n4'}
      </Text>
      <Text data-ecu="LiXfnWkDts:3">Foo!</Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name Long
      />
      <Text data-ecu="LiXfnWkDts:4">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="LiXfnWkDts:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
