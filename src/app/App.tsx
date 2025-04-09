import type { FormEvent } from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

import { Header } from '@/components/header.tsx';
import { TodoList } from '@/components/TodoList.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTodos } from '@/lib/hooks/useTodos';

export const App = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all');
  const { addTodo, toggleTodo, getFilteredTodos } = useTodos();

  const isTodoTitleEmpty = todoTitle.length === 0;

  const handlerAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <>
      <Header />
      <main className='w-[1420px] m-auto p-4'>
        <form onSubmit={handlerAddTodo} className='flex gap-6'>
          <Input
            data-testid='input-todo'
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            placeholder='Typed todo'
          />
          <Button
            data-testid='submit-todo'
            disabled={isTodoTitleEmpty}
            type='submit'
            variant='outline'
            size='icon'
          >
            <Plus color='orange' />
          </Button>
        </form>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as typeof activeTab)}
          className='mt-6'
        >
          <TabsList>
            <TabsTrigger value='all'>All</TabsTrigger>
            <TabsTrigger value='active'>Active</TabsTrigger>
            <TabsTrigger value='completed'>Completed</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <TodoList
              todos={getFilteredTodos('all')}
              onToggleTodo={toggleTodo}
            />
          </TabsContent>

          <TabsContent value='active'>
            <TodoList
              todos={getFilteredTodos('active')}
              onToggleTodo={toggleTodo}
            />
          </TabsContent>

          <TabsContent value='completed'>
            <TodoList
              todos={getFilteredTodos('completed')}
              onToggleTodo={toggleTodo}
            />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};
