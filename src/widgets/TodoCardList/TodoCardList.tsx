import { Container, Flex } from '@mantine/core'
import classNames from 'classnames'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import {
  useDeleteTodoMutation,
  useUpdateTodoDoneMutation,
} from '@/entities/Todo/api'
import { Todo } from '@/entities/Todo/model'
import { Controls } from '@/pages/HomePage/HomePage'
import { Checkbox } from '@/shared/ui'
import { TodoCard } from '@/widgets'

import styles from './TodoCardList.module.scss'

interface TodoCardListProps {
  className?: string
  todos: Todo[]
  setControlsInfo: Dispatch<SetStateAction<Controls>>
  activeTab: string
}

export const TodoCardList = ({
  className,
  todos,
  setControlsInfo,
  activeTab,
}: TodoCardListProps) => {
  const [todosList, setTodosList] = useState(todos)
  const [filteredTodos, setFilteredTodos] = useState(todosList)
  const classes = classNames(className, styles.root)
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateDoneTodo] = useUpdateTodoDoneMutation()

  const onChangeTodoDone = (todo: Todo) => {
    updateDoneTodo(todo)
  }

  const onDeleteTodo = (id: number) => {
    deleteTodo(id)
  }

  const toggleIsDone = (todoOld: Todo) => {
    const updatedTodos = todosList.map((todo) =>
      todoOld.id === todo.id ? { ...todo, isDone: !todo.isDone } : todo,
    )
    setTodosList(updatedTodos)
    onChangeTodoDone(todoOld)
  }

  useEffect(() => {
    setTodosList(todos)
  }, [todos])

  useEffect(() => {
    setControlsInfo({
      all: todosList.length,
      done: todosList.filter((item) => item.isDone).length,
      inProgress: todosList.filter((item) => !item.isDone).length,
    })
  }, [setControlsInfo, todos, todosList])

  // TODO переписать на хук
  useEffect(() => {
    switch (activeTab) {
      case 'done':
        setFilteredTodos(todosList.filter((item) => item.isDone))
        break
      case 'progress':
        setFilteredTodos(todosList.filter((item) => !item.isDone))
        break
      default:
        setFilteredTodos(todosList)
        break
    }
  }, [activeTab, todos, todosList])

  const cardItem = filteredTodos.map((card) => (
    <TodoCard
      key={card.id}
      onDeleteTodo={() => onDeleteTodo(card.id)}
      checkbox={
        <Checkbox checked={card.isDone} onChange={() => toggleIsDone(card)} />
      }
      {...card}
    />
  ))

  return (
    <Container className={classes} size="xs" pt={20}>
      <Flex direction="column" gap="md" align="center">
        {cardItem}
      </Flex>
    </Container>
  )
}
