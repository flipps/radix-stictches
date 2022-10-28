import { createStitches } from '@stitches/react'

export const { styled } = createStitches({
	theme: {
		colors: {
			black: 'slategray',
			white: 'ghostwhite',
			blue: 'slateblue',
			salmon: 'coral',
			pink: 'deeppink',
			green: 'turquoise',
			gradient1: 'linear-gradient(90deg, rgba(255,20,147,1) 0%, rgba(255,127,80,1) 100%)',
			gradient2: 'linear-gradient(90deg, rgba(106,90,205,1) 0%, rgba(64,224,208,1) 100%)',
		},
		fonts: {
			poppins: 'Poppins, sans-serif',
			raleway: 'Raleway',
		},
		fontSizes: {
			1: '12px',
			2: '14px',
			3: '16px',
			4: '20px',
			5: '24px',
			6: '32px',
		},
		space: {
			1: '4px',
			2: '8px',
			3: '16px',
			4: '32px',
			5: '64px',
			6: '128px',
		},
		sizes: {
			1: '4px',
			2: '8px',
			3: '16px',
			4: '32px',
			5: '64px',
			6: '128px',
		},
		radii: {
			1: '2px',
			2: '4px',
			3: '8px',
			round: '9999px',
		},
		fontWeights: {},
		lineHeights: {},
		letterSpacings: {},
		borderWidths: {},
		borderStyles: {},
		shadows: {},
		zIndices: {},
		transitions: {},
	},
});
