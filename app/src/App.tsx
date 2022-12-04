// ecu-file-id YThlXDd3C
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
        data-ecu="0zowEmoPX:0">
        <Div
          className="flex-0"
          data-ecu="0zowEmoPX:0_0" />
        <Text // ecu-display-name Text!
          className="width"
          data-ecu="0zowEmoPX:0_1">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="center"
        data-ecu="0zowEmoPX:1">
        Red classNam
      </Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="height-overflow"
        data-ecu="0zowEmoPX:2">
        {'1\n2\n3\n4\n5\n6'}
      </Text>
      <Text data-ecu="0zowEmoPX:3">
        Emoji className
      </Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text data-ecu="0zowEmoPX:4">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="0zowEmoPX:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
