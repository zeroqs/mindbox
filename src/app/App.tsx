import type { FormEvent } from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

import { Header } from '@/components/header.tsx';
import { TodoList } from '@/components/TodoList.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { initialTodos } from '@/lib/constants.ts';
import type { Todo } from '@/types';

export const App = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todos, setTodos] = useState<Todo[]>(() => initialTodos);

  const isTodoTitleEmpty = todoTitle.length === 0;

  const handlerAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = { id: todos.length + 1, title: todoTitle, completed: false };
    setTodos((prevState) =>
      [newTodo, ...prevState]);
    setTodoTitle('');
  };

  const handleToggleTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo);

    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <main className='w-[1420px] m-auto p-4'>
        <form onSubmit={handlerAddTodo} className='flex gap-6'>
          <Input data-testid='input-todo' value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)} placeholder='Typed todo' />
          <Button data-testid='submit-todo' disabled={isTodoTitleEmpty} type='submit' variant='outline' size='icon'>
            <Plus color='orange' />
          </Button>
        </form>

        <Tabs defaultValue='all' className='mt-6'>
          <TabsList>
            <TabsTrigger value='all'>All</TabsTrigger>
            <TabsTrigger value='active'>Active</TabsTrigger>
            <TabsTrigger value='completed'>Completed</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
          </TabsContent>

          <TabsContent value='active'>
            <TodoList
              todos={todos.filter((todo) => !todo.completed)}
              onToggleTodo={handleToggleTodo}
            />
          </TabsContent>

          <TabsContent value='completed'>
            <TodoList
              todos={todos.filter((todo) => todo.completed)}
              onToggleTodo={handleToggleTodo}
            />
          </TabsContent>
        </Tabs>

      </main>
    </>
  );
};
