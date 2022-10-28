import { styled } from '../stitches.config'
import * as LabelPrimitive from '@radix-ui/react-label'

const StyledLabel = styled(LabelPrimitive.Root, {
	fontSize: '$2',
	fontFamily: '$raleway',
	color: '$blue',
	userSelect: 'none',
	marginRight: '$2',
})

export const Input = styled('input', {
  all: 'unset',
  width: '70%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: '$3',
  lineHeight: 1,
  color: '$blue',
  backgroundColor: '$white',
	transition: 'all 0.1s ease',
	boxShadow: `0 0 0 1px slategray`,
  '&:focus': { boxShadow: `0 0 0 2px slateblue` },
});

export const Label = StyledLabel
