const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'transactions', component: () => import('pages/dashboard/TransactionsPage.vue') },
      { path: 'activity', component: () => import('pages/dashboard/GenericPage.vue') },
      { path: 'pix', component: () => import('pages/dashboard/GenericPage.vue') },
      { path: 'loans', component: () => import('pages/dashboard/GenericPage.vue') },
      { path: 'cards', component: () => import('pages/dashboard/GenericPage.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', redirect: '/auth/login' },
      { path: 'login', component: () => import('pages/auth/LoginPage.vue') },
      { path: 'register', component: () => import('pages/auth/RegisterPage.vue') },
      { path: 'forgot-password', component: () => import('pages/auth/ForgotPasswordPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
