import { Flex } from '@mantine/core'
import { hasLength, useForm } from '@mantine/form'
import classNames from 'classnames'

import { useCreateTodoMutation } from '@/entities/Todo/api'
import { Button, Input, Modal, Textarea } from '@/shared/ui'

import styles from './AddTodoModal.module.scss'

interface AddTodoModalProps {
  className?: string
  opened: boolean
  close: () => void
  dataTestId?: string
}

export const AddTodoModal = ({
  className,
  opened,
  close,
  dataTestId,
}: AddTodoModalProps) => {
  const classes = classNames(className, styles.root)
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
    },
    validateInputOnBlur: true,
    validate: {
      title: hasLength(
        { min: 2 },
        'Название обязательно должно иметь больше 2 символов',
      ),
      description: hasLength(
        { min: 10 },
        'Описание обязательно должно иметь больше 10 символов',
      ),
    },
  })
  const [createPost] = useCreateTodoMutation({})

  const create = async (values: { title: string; description: string }) => {
    const newTodo = {
      ...values,
      isDone: false,
    }
    await createPost(newTodo)
    form.reset()
    close()
  }

  const closeModal = () => {
    form.reset()
    close()
  }

  return (
    <Modal
      data-testid={dataTestId}
      className={classes}
      opened={opened}
      close={closeModal}
      onClose={closeModal}
      title="🎯 Добавить задачу 🎯"
    >
      <form onSubmit={form.onSubmit((values) => create(values))}>
        <Flex direction="column" gap="md">
          <Input
            withAsterisk
            data-autofocus
            label="Название задачи"
            placeholder="✏️ Тестовое mindbox ✏️"
            {...form.getInputProps('title')}
          />
          <Textarea
            placeholder="✏️ Сделать тестовое за сутки ✏️"
            label="Описание задачи"
            radius="md"
            withAsterisk
            autosize
            minRows={3}
            {...form.getInputProps('description')}
          />
          <Button type="submit" color="green">
            Создать
          </Button>
        </Flex>
      </form>
    </Modal>
  )
}
