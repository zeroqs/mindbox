import { RouteProps } from 'react-router-dom'

import { HomePage } from '@/pages'

enum AppRoutes {
  HOME = 'home',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
}
