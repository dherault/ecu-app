/* --
  * IMPORTS START
-- */
import { Text } from 'ecu'

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
The app, splendid!
*/
/* --
  * DESCRIPTION END
-- */

function App(props: AppPropsType) {
  return (
    <>
      <Text data-ecu="hxtLeUVgve:0">Edit me I'm a Text</Text>
      <Text data-ecu="hxtLeUVgve:1">Edit me I'm a Text</Text>
      <Text data-ecu="hxtLeUVgve:2">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="hxtLeUVgve:3">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
