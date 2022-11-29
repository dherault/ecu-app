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
        data-ecu="ZPiWYCu9g:0">
        <Text // ecu-display-name Text!
          data-ecu="ZPiWYCu9g:0_0">
          {':D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D :D  '}
        </Text>
      </Div>
      <Text // ecu-display-name Red className
        className="red hero-❤️"
        data-ecu="ZPiWYCu9g:1">
        Red className
      </Text>
      <CoolDiv // ecu-display-name Some cool div
      />
      <Text
        className="foo baz"
        data-ecu="ZPiWYCu9g:2">
        {'1\n2\n3\n4'}
      </Text>
      <Text data-ecu="ZPiWYCu9g:3">Foo!</Text>
      <ComponentWithAVeryLongNameSoLongSoLongSoLongSoLong // ecu-display-name LongLongLongLongLongLongLongLong
      />
      <Text
        className="another-cool-class yet-another-cool-class again-cool-class"
        data-ecu="ZPiWYCu9g:4">
        Responsive
      </Text>
      <CoolDiv />
      <Text data-ecu="ZPiWYCu9g:5">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
