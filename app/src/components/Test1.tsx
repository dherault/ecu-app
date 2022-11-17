/* --
* IMPORTS START
-- */
import { Div } from 'ecu'

/* --
* IMPORTS END
-- */
/* --
* TYPES START
-- */
type Test1PropsType = Record<string, never>;

/* --
* TYPES END
-- */

function Test1(props: Test1PropsType) {
  return (
    <Div data-ecu="F_Jh-Sx9YF:0">
      Edit me I'm famous!
    </Div>
  )
}

export default Test1
