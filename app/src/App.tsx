import { Div } from 'ecu'

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
      <Div data-ecu="gGQM54UYhq:0">
        App
      </Div>
      <CoolDiv />
    </>
  )
}

export default App
