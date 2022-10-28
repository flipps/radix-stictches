import { styled } from '../stitches.config'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
	all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
	marginRight: 8,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 0 1px slateblue',
  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  '&:focus': { boxShadow: '0 0 0 2px slategray' },
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
	color: 'slateblue',
})

export const CheckboxGroup = styled('div', {
	display: 'flex',
	alignItems: 'center',
	marginBlock: '$3',
	marginRight: '$3',
})

export const Checkbox = () => (
	<StyledCheckbox>
		<StyledIndicator>
			<CheckIcon />
		</StyledIndicator>
	</StyledCheckbox>
)
