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
      <CoolDiv />
      <Div data-ecu="ENpqnFQnRj:0">
        App
      </Div>
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
      <CoolDiv />
    </>
  )
}

export default App
