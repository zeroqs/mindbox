import { Center, Container } from '@mantine/core'

import { useGetAllQuery } from '@/entities/Todo/api'
import { Todo } from '@/widgets'

export interface Controls {
  all: number | undefined
  done: number | undefined
  inProgress: number | undefined
}

const HomePage = () => {
  const { data, isFetching, isSuccess } = useGetAllQuery()
  return (
    <main>
      {isFetching && (
        <Container>
          <Center>
            <h1>Loading</h1>
          </Center>
        </Container>
      )}
      {isSuccess && <Todo data={data} />}
    </main>
  )
}

export default HomePage
