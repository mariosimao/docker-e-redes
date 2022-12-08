// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const lightTheme = {
	dark: false,
	colors: {
		primary: '#0f4c81',
	},
};

const darkTheme = {
	dark: true,
	colors: {
		primary: '#0f4c81',
	},
};

export default createVuetify({
	theme: {
		defaultTheme: 'lightTheme',
		themes: {
			lightTheme,
      darkTheme,
		},
	},
});
