import { Center, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classNames from 'classnames'
import { useState } from 'react'

import { Todo as TodoDto } from '@/entities/Todo/model'
import { Controls } from '@/pages/HomePage/HomePage'
import { AddTodoModal, TodoCardList, TodoControls } from '@/widgets'

import styles from './Todo.module.scss'

interface TodoProps {
  className?: string
  data: TodoDto[]
}

export const Todo = ({ className, data }: TodoProps) => {
  const classes = classNames(className, styles.root)
  const [opened, { open, close }] = useDisclosure(false)
  const [controlsInfo, setControlsInfo] = useState<Controls>({} as Controls)
  const [activeTab, setActiveTab] = useState<string>('all')
  return (
    <>
      <Container className={classes}>
        <Center h={100} mx="auto">
          <TodoControls
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            open={open}
            controlsInfo={controlsInfo}
          />
        </Center>
      </Container>
      <TodoCardList
        todos={data}
        setControlsInfo={setControlsInfo}
        activeTab={activeTab}
      />

      <AddTodoModal opened={opened} close={close} />
    </>
  )
}
