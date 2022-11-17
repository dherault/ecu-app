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
    <Div data-ecu="5K5DicUsvl:0">
      <Text data-ecu="5K5DicUsvl:0_0">
        Edit me I'm famous!
      </Text>
    </Div>
  )
}

export default CoolDiv
