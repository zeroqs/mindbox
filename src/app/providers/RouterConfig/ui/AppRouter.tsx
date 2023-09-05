import { ActionIcon, Loader, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { Suspense, useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { routeConfig } from '../config/RouterConfig'

export const AppRouter = () => {
  const location = useLocation()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <main style={{ minHeight: '100dvh' }}>
      <header>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Routes>
      </Suspense>
    </main>
  )
}
