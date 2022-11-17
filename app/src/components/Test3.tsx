import { Div } from 'ecu'

import CoolDiv from './CoolDiv'
/* --
* IMPORTS START
-- */

/* --
* IMPORTS END
-- */
/* --
* TYPES START
-- */
type Test3PropsType = Record<string, never>;

/* --
* TYPES END
-- */

function Test3(props: Test3PropsType) {
  return (
    <>
      <CoolDiv />
      <CoolDiv />
      
    </>
  )
}

export default Test3
