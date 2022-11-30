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
        data-ecu="elMcaJy24Ww:0">
        <Text // ecu-display-name Text!
          className="width"
          data-ecu="elMcaJy24Ww:0_0">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="width flex"
        data-ecu="elMcaJy24Ww:1">
        Red className
      </Text>
      
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="max-height"
        data-ecu="elMcaJy24Ww:2">
        {'1\n2\n3\n4\n5\n6'}
      </Text>
      <Text
        className="😆"
        data-ecu="elMcaJy24Ww:3">
        Emoji class
      </Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text
        className="cool-class flex"
        data-ecu="elMcaJy24Ww:4">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="elMcaJy24Ww:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
