import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/workspaces',
    name: 'Workspaces',
    component: loadPage('Workspaces')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: loadPage('MasonryProjects')
  },
  {
    path: '/folders',
    name: 'Folders',
    component: loadPage('MasonryFolders')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: loadPage('MasonryNotes')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: loadPage('MasonryTasks')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
