import { useState } from 'react';

import { initialTodos } from '@/lib/constants';
import type { Todo } from '@/types';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => initialTodos);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const getFilteredTodos = (filter: 'all' | 'active' | 'completed') => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    getFilteredTodos
  };
};
