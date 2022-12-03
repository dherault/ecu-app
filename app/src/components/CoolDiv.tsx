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
The app, splendid!!
*/
/* --
  * DESCRIPTION END
-- */
function CoolDiv(props: CoolDivPropsType) {
  return (
    <Div // ecu-display-name The cool div
      data-ecu="yG4iOl9Q6bG:0">
      <Text // ecu-display-name Some text
        data-ecu="yG4iOl9Q6bG:0_0">
        Edit me I'm a CoolDiv
      </Text>
    </Div>
  )
}

export default CoolDiv
