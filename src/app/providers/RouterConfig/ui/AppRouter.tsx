import {
  ActionIcon,
  Container,
  Loader,
  useMantineColorScheme,
} from '@mantine/core'
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
        <Container p={20}>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size="xl" /> : <IconMoonStars size="xl" />}
          </ActionIcon>
        </Container>
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
