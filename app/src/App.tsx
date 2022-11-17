import { Div } from 'ecu'

import DualCoolDivs from './components/DualCoolDivs'
import CoolDiv from './components/CoolDiv'
/* --
  * IMPORTS START
-- */

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

function App(props: AppPropsType) {
  return (
    <>

      <CoolDiv />
      <Div data-ecu="-XSZQU6T7Y:0">
        App
      </Div>
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <DualCoolDivs />
    </>
  )
}

export default App
