import { styled } from '../stitches.config'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

export const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
	marginRight: '$2',
  boxShadow: '0 0 0 1px slateblue',
  '&:hover': { backgroundColor: 'rbga(0, 0, 0, 0.1)' },
  '&:focus': { boxShadow: '0 0 0 2px slategray' },
})

export const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: 'slateblue',
  },
})
