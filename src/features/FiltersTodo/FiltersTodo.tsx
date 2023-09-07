import { Badge, Tabs } from '@mantine/core'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'

import { Controls } from '@/pages/HomePage/HomePage'

import styles from './FiltersTodo.module.scss'

interface FiltersTodoProps {
  className?: string
  controlsInfo: Controls
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
}

export const FiltersTodo = ({
  className,
  controlsInfo,
  setActiveTab,
  activeTab,
}: FiltersTodoProps) => {
  const classes = classNames(className, styles.root)

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Tabs className={classes} value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab
          rightSection={
            <Badge
              w={16}
              h={16}
              sx={{ pointerEvents: 'none' }}
              variant="filled"
              size="xs"
              p={0}
            >
              {controlsInfo.all}
            </Badge>
          }
          value="all"
        >
          Все
        </Tabs.Tab>
        <Tabs.Tab
          rightSection={
            <Badge
              w={16}
              h={16}
              sx={{ pointerEvents: 'none' }}
              variant="filled"
              size="xs"
              p={0}
            >
              {controlsInfo.inProgress}
            </Badge>
          }
          value="progress"
        >
          В прогрессе
        </Tabs.Tab>
        <Tabs.Tab
          rightSection={
            <Badge
              w={16}
              h={16}
              sx={{ pointerEvents: 'none' }}
              variant="filled"
              size="xs"
              p={0}
            >
              {controlsInfo.done}
            </Badge>
          }
          value="done"
        >
          Выполненные
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}
