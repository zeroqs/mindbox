import { TodoCard } from '@/components/todo.tsx';
import type { Todo } from '@/types';

export const TodoList = ({ todos, onToggleTodo }:
{ todos: Todo[]; onToggleTodo: (id: number) => void }) => {
  if (!todos.length) return (
    <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight text-center'>
      Empty󠁪󠁪󠁪 👉 👈
    </h3>
  );
  return (
    <ul className='mt-4'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onToggleTodo(todo.id)}
          className='py-2 cursor-pointer'
        >
          <TodoCard {...todo} />
        </li>
      ))}
    </ul>
  );
};
