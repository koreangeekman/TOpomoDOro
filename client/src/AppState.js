import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Account.js').Account[]} */
  authors: [],

  /** @type {import('./models/Widget/ToDo.js').ToDo[]} */
  todos: [],


  widgets: { // to anchor the current instance of simple widget data objects
    /** @type {import('./models/Widget/Weather.js').Weather} */
    weather: {}, // populated by OpenWeather API on get
    /** @type {import('./models/Widget/BGImg.js').BGImg} */
    bgImg: {}, // populated by CodeWorks Sandbox API on get
    /** @type {import('./models/Widget/Quote.js').Quote} */
    quote: {}, // populated by CodeWorks Sandbox API on get
  },

  backgrounds: [],

  settings: {
    viewMode: {
      name: 'defaultPoDo', // enum[defaultPoDo,singleToDo,multiToDo,streamerPoDo,streamerToDo,streamerMultiToDo]
      hAlign: 'justify-content-center', // enum[justify-content-start,justify-content-center,justify-content-end]
      vAlign: 'd-flex align-items-center', // enum[align-items-start,align-items-center,align-items-end]
      pomoColWidth: 6, // enum[1-11]/12
      todoColWidth: 4, // enum[1-11]/12
      saveLastView: false // keep track of last used view and reopen / disable 'name' field change by user? and auto-update
    },
    todo: {
      showAll: true, // show all todo entries or hide completed
      activeProject: '',
      todoColWidth: 4, // enum[1-12]/12 -- max column width -- when ToDo only
    },
    pomodoro: {
      lockRatio: true, // 5/1 work/break time ratio
      workTime: 25,
      breakTime: 5,
      cycles: 1,
      breakTimeAudioCue: '',
      workTimeAudioCue: '',
      pomoColWidth: 6, // enum[1-12]/12 -- max column width -- when pomodoro only
    },
    weather: {
      city: 'Boise',
      location: {
        lon: -116.2035,
        lat: 43.6135
      }, // {lon, lat}
      format: 'F', // 'K'elvin, 'F'ahrenheit, 'C'elsius
      lastPoll: new Date()
    },
    quote: {
      enabled: true,
      autoChange: false,
      cycle: 24 // auto-refresh interval -- in hours
    },
    bgImg: {
      enabled: true, // when disabled, use bgColor
      bgColor: '#123456', // set as a custom bg-color
      textColor: '#123456', // set as a custom font-color
      autoChange: false, // when true, use (cycle * 60min * 60sec * 1000ms)
      cycle: 24, // auto-refresh interval -- in hours
      customBGImg: '', // if autoChange is disabled, option for custom BG
    },
    clock: {
      timeFormat: '12',
      timeZone: '-7'
    },
    lastLogin: new Date() // last login tracking
  }

})
