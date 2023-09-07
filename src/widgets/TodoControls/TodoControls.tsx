import { Flex } from '@mantine/core'
import { IconSquareRoundedPlusFilled } from '@tabler/icons-react'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'

import { FiltersTodo } from '@/features'
import { Controls } from '@/pages/HomePage/HomePage'
import { Button } from '@/shared/ui'

import styles from './TodoControls.module.scss'

interface TodoControlsProps {
  className?: string
  open: () => void
  controlsInfo: Controls
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
}

export const TodoControls = ({
  className,
  open,
  controlsInfo,
  activeTab,
  setActiveTab,
}: TodoControlsProps) => {
  const classes = classNames(className, styles.root)
  return (
    <Flex className={classes} gap="md" wrap="wrap">
      <FiltersTodo
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        controlsInfo={controlsInfo}
      />
      <Button
        color="green"
        rightIcon={<IconSquareRoundedPlusFilled size="1rem" />}
        onClick={open}
      >
        Добавить задачу
      </Button>
    </Flex>
  )
}
