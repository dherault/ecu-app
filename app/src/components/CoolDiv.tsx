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
1f192
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
function CoolDiv(props: CoolDivPropsType) {
  return (
    <Div // ecu-display-name The cool div
      data-ecu="yt_JhtN9HAw:0">
      <Text // ecu-display-name Some text
        data-ecu="yt_JhtN9HAw:0_0">
        Edit me I'm a CoolDiv
      </Text>
    </Div>
  )
}

export default CoolDiv
