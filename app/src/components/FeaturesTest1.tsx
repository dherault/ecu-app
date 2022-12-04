// ecu-file-id OByDvrZA-S
/* --
* IMPORTS START
-- */
import { Div, Text } from 'ecu'

/* --
* IMPORTS END
-- */
/* --
* TYPES START
-- */
type FeaturesTest1PropsType = Record<string, never>;

/* --
* TYPES END
-- */
/* --
  * EMOJI START
-- */
/* --
  * EMOJI END
-- */
/* --
  * DESCRIPTION START
-- */
/* --
  * DESCRIPTION END
-- */

function FeaturesTest1(props: FeaturesTest1PropsType) {
  return (
    <>
      <Div
        className="div-remove-me"
        data-ecu="0X5QLjV2oX:0" />
      <Text
        className="feature-test-text"
        data-ecu="0X5QLjV2oX:1">
        Edit me I'm famous!
      </Text>
    </>
  )
}

export default FeaturesTest1
