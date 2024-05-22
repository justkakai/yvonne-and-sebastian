import { extendTheme } from '@chakra-ui/react';
import type { ChakraTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false
};

const styles: ChakraTheme['styles'] = {
	global: {
		body: {
			bg: '#F9FAFF',
			color: '#4a4a4a',
			height: '100vh'
		},
		a: {
			color: 'brand.500',
			_hover: {
				textDecoration: 'underline'
			},
			cursor: 'pointer'
		}
	}
};

const colors: ChakraTheme['colors'] = {
	/* eslint-disable @typescript-eslint/naming-convention */
	brand: {
		100: '#c0edde',
		200: '#9ddfc9',
		300: '#78d1b4',
		400: '#54c49f',
		500: '#4a4a4a',
		600: '#f3f3f3',
		700: '#F6F0EA',
		900: '#1a202c'
	},
	gray: {
		100: '#718096'
	},
	backgrounds: {
		100: '#ffffff',   // emphbglight
		200: '#fffdf8',   // bglight
		300: '#e4e4e4',   // modalbglight
		700: '#171923',   // modalbgdark
		800: '#080600',   // bgdark
		900: '#000000'    // emphbgdark
	},
	foregrounds: {
		100: '#ffffff',   // emphfggdark
		200: '#c6deff',   // fgdark
		300: '#cccccc',
		700: '#333333',
		800: '#0A3254',   // fglight
		900: '#000000'    // emphfglight
	},
	warning: {
		100: '#E53E3E'
	}
	/* eslint-enable @typescript-eslint/naming-convention */
};

const semanticTokens: ChakraTheme['semanticTokens'] = {
	colors: {
		bg: {
			default: 'backgrounds.200',
			_dark: 'backgrounds.800'
		},
		bgtrans: {
			default: 'whiteAlpha.800',
			_dark: 'blackAlpha.800'
		},
		fgtrans: {
			default: 'foregrounds.700',
			_dark: 'foregrounds.300'
		},
		containerbg: {
			default: 'backgrounds.100',
			_dark: 'gray.900'
		},
		containerborder: {
			default: 'brand.500',
			_dark: 'brand.600'
		},
		emphbg: {
			default: 'backgrounds.100',
			_dark: 'backgrounds.900'
		},
		emphfg: {
			default: 'foregrounds.900',
			_dark: 'foregrounds.100'
		},
		fg: {
			default: 'foregrounds.800',
			_dark: 'foregrounds.200'
		},
		modalbg: {
			default: 'backgrounds.100',
			_dark: 'backgrounds.300'
		},
		modalborder: {
			default: 'gray.200',
			_dark: 'gray.600'
		},
		spinner: {
			default: 'brand.600',
			_dark: 'brand.400'
		},
		chartwarn: {
			default: 'red.600',
			_dark: 'red.500'
		}
	}
};

const fonts: ChakraTheme['fonts'] = {
	heading: '"Fragment", sans-serif',
	body: '"RadioGrotesk", sans-serif'
};

const components: ChakraTheme['components'] = {
	Button: {
		baseStyle: {
			_focus: { boxShadow: 'none' }
		},
		variants: {
			main: {
				background: 'brand.400',
				color: 'brand.500'
			},
			fun: {
				alignItems: 'center',
				backgroundColor: 'transparent',
				border: '2px solid',
				borderColor: 'brand.500',
				borderRadius: 'lg',
				boxSizing: 'border-box',
				color: 'brand.500',
				cursor: 'pointer',
				display: 'flex',
				fontSize: '18px',
				fontWeight: 'bold',
				justifyContent: 'center',
				lineHeight: '28px',
				maxWidth: '100%',
				padding: '14px 22px',
				textDecoration: 'none',
				transition: 'all .2s',
				userSelect: 'none',
				touchAction: 'manipulation'
				// width: '50%'
				// boxShadow: 'rgb(6 22 33 / 30%) 0px 1px 2px'
			},
			alert: {
				background: 'red.900',
				color: 'white'
			},
			warning: {
				background: 'warning.100',
				color: 'foregrounds.800',
				_hover: {
					borderColor: 'warning.200'
				}
			},
			secondary: {
				colorScheme: 'gray'
			},
			tertiary: {
				background: 'backgrounds.800',
				color: 'white'
			},
			accordion: {
				background: 'backgrounds.800'
			}
		},
		defaultProps: {
			color: 'brand.500'
		}
	},
	Input: {
		defaultProps: {
			focusBorderColor: 'brand.400'
		},
		variants: {
			outline: {
				field: {
					borderColor: 'backgrounds.300',
					border: '1px solid',
					bg: 'backgrounds.100',
					_hover: {
						borderColor: 'brand.400'
					},
					_placeholder: {
						color: 'gray.100'
					}
				}
			}
		}
	},
	Select: {
		baseStyle: {
			field: {
				borderRadius: 4
			}
		},
		defaultProps: {
			focusBorderColor: 'brand.400'
		}
	},
	NumberInput: {
		defaultProps: {
			focusBorderColor: 'brand.400'
		}
	},
	Container: {
		baseStyle: {
			maxWidth: '760px'
		},
		variants: {
			nav: {
				bg: '#F8FAFF',
				py: '10',
				maxWidth: '100%'
			}
		}
	},
	Popover: {
		baseStyle: {
			_focus: { boxShadow: 'none' }
		}
	},
	Link: {
		variants: {
			deco: {
				_hover: {
					textDecoration: 'underline'
				},
				color: '#328578'
			}
		}
	}
};

const theme = extendTheme({
	config,
	styles,
	colors,
	semanticTokens,
	fonts,
	components
});

export default theme;
