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
type DualCoolDivsPropsType = Record<string, never>;

/* --
* TYPES END
-- */
/* --
  * EMOJI START
-- */
/*
0032-fe0f-20e3
*/
/* --
  * EMOJI END
-- */
/* --
  * DESCRIPTION START
-- */
/*

*/
/* --
  * DESCRIPTION END
-- */
function DualCoolDivs(props: DualCoolDivsPropsType) {
  return (
    <>
      <CoolDiv />
      <CoolDiv />
    </>
  )
}

export default DualCoolDivs
