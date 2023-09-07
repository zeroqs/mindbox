import { Todo } from '@/entities/Todo/model'
import { baseApi } from '@/shared/api'

const todoApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['Todo'] })
  .injectEndpoints({
    endpoints: (build) => ({
      getAll: build.query<Todo[], void>({
        query: () => ({
          url: `/todos`,
        }),
        providesTags: ['Todo'],
      }),
      createTodo: build.mutation<Todo, Omit<Todo, 'id'>>({
        query: (todo) => ({
          url: `/todos`,
          method: 'POST',
          body: todo,
        }),
        invalidatesTags: ['Todo'],
      }),
      deleteTodo: build.mutation<Todo, number>({
        query: (id) => ({
          url: `/todos/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Todo'],
      }),
      updateTodoDone: build.mutation<Todo, Todo>({
        query: ({ id, isDone, description, title }) => ({
          url: `/todos/${id}`,
          method: 'PATCH',
          body: {
            isDone: !isDone,
            description,
            title,
          },
        }),
      }),
    }),
  })
export const {
  useCreateTodoMutation,
  useGetAllQuery,
  useDeleteTodoMutation,
  useUpdateTodoDoneMutation,
} = todoApi
