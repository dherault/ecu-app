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
      <Text data-ecu="CcDhNy8Bnu:0" />
      <Text data-ecu="CcDhNy8Bnu:1">First double click here</Text>
      <CoolDiv />
      <Text data-ecu="CcDhNy8Bnu:2">Then double click here!</Text>
      <DualCoolDivs />
    </>
  )
}

export default App
