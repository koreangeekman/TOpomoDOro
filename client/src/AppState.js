import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Widget/ToDo.js').ToDo[]} */
  todos: [],


  settings: {
    weather: {
      location: '',
      format: 'F' // 'K'elvin, 'F'ahrenheit, 'C'elsius
    },
    quote: {
      enabled: true,
      autoChange: false,
      cycle: 3600 // auto-refresh interval
    },
    bgImg: {
      enabled: true,
      bgColor: '#123456', // if bgImg is disabled/unresponsive, set a custom bg-color
      autoChange: false,
      cycle: 3600 // auto-refresh interval
    },
    todo: {
      showAll: true,
    }
  },


  widgets: { // to anchor the current instance of simple widget data objects
    weather: {}, // populated by OpenWeather API on get
    bgImg: {},
    quote: {}
  },

  backgrounds: []
})
