import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Task.js').Task[]} */
  tasks: [],
  /** @type {import('./models/Note.js').Note[]} */
  notes: [],
  /** @type {import('./models/Folder.js').Folder[]} */
  folders: [],
  /** @type {import('./models/Project.js').Project[]} */
  projects: [],
  /** @type {import('./models/Workspace.js').Workspace} */
  workspaces: [],

  activeTask: null,
  activeFolder: null,
  activeProject: null,

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
    }
  },

  weather: {}, // populated by OpenWeather API on get

  widgets: { // to anchor the current instance of simple widget objects data
    bgImg: {},
    quote: {}
  },

  backgrounds: []
})
