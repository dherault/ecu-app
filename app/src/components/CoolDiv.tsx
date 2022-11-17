import { Div, Text } from 'ecu'

/* --
  * IMPORTS END
-- */
/* --
  * TYPES START
-- */
type CoolDivPropsType = Record<string, never>;
/* --
  * TYPES END
-- */

function CoolDiv(props: CoolDivPropsType) {
  return (
    <Div data-ecu="MaLqLYaQeV:0">
      <Text data-ecu="MaLqLYaQeV:0_0">Edit me I'm a CoolDiv!</Text>
    </Div>
  )
}

export default CoolDiv
