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

function DualCoolDivs(props: DualCoolDivsPropsType) {
  return (
    <>
      <CoolDiv />
      <Div data-ecu="h53m0nrgvj:0">
        Edit me I'm famous!
      </Div>
    </>
  )
}

export default DualCoolDivs
