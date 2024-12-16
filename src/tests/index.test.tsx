import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { App } from '@/app/App.tsx';
import { initialTodos } from '@/lib/constants';

describe('Todo App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders initial todos correctly', () => {
    initialTodos.forEach((todo) => {
      const todoItem = screen.getByText(todo.title);

      expect(todoItem).toBeInTheDocument();
      expect(todoItem.textContent).toContain(todo.title);
    });
  });

  it('add a new todo', () => {
    const input = screen.getByTestId('input-todo');
    const button = screen.getByTestId('submit-todo');

    fireEvent.change(input, { target: { value: 'Новое задание' } });
    fireEvent.click(button);

    const newTodo = screen.getByText('Новое задание');
    expect(newTodo).toBeInTheDocument();
    expect(newTodo.textContent).toContain('Новое задание');
  });

  it('toggles a todo\'s completion', () => {
    const todoItem = screen.getByTestId('todo-item-1');
    const todoItemCheckbox = screen.getByTestId('todo-item-checkbox-1');
    expect(todoItemCheckbox.getAttribute('aria-checked')).toEqual('true');

    fireEvent.click(todoItem);
    expect(todoItemCheckbox.getAttribute('aria-checked')).toEqual('false');

    fireEvent.click(todoItem);
    expect(todoItemCheckbox.getAttribute('aria-checked')).toEqual('true');
  });
});
