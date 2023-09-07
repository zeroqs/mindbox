import { Badge, Flex, Group, Text } from '@mantine/core'
import classNames from 'classnames'
import { ReactNode } from 'react'

import { Button, Card } from '@/shared/ui'

import styles from './TodoCard.module.scss'

interface TodoCardProps {
  className?: string
  isDone?: boolean
  description: string
  title: string
  checkbox?: ReactNode
  onDeleteTodo: () => void
}

export const TodoCard = ({
  className,
  isDone,
  description,
  title,
  checkbox,
  onDeleteTodo,
}: TodoCardProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Card
      className={classes}
      w="80%"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Group position="apart">
        <Text weight={500}>{title}</Text>
        {isDone ? (
          <Badge color="green" variant="light">
            Выполнена
          </Badge>
        ) : (
          <Badge color="orange" variant="light">
            В прогрессе
          </Badge>
        )}
      </Group>

      <Text size="sm" color="dimmed" pt={15} pb={15}>
        {description}
      </Text>

      <Flex gap="md" align="center" justify="space-between" mt={10}>
        {checkbox}
        <Button
          variant="light"
          color="red"
          w="35%"
          fullWidth
          radius="md"
          onClick={onDeleteTodo}
        >
          Удалить
        </Button>
      </Flex>
    </Card>
  )
}
