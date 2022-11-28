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
        data-ecu="4_PFmJeDFmc:0" />
      <Div data-ecu="4_PFmJeDFmc:1" />
      <Div data-ecu="4_PFmJeDFmc:2" />
      <Div data-ecu="4_PFmJeDFmc:3" />
      <Text data-ecu="4_PFmJeDFmc:4">
        Edit me I'm famous!
      </Text>
    </>
  )
}

export default FeaturesTest1
