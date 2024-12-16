import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { App } from '@/app/App.tsx';
import { initialTodos } from '@/lib/constants';

describe('Todo App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders initial todos correctly', () => {
    initialTodos.forEach((todo) => {
      const todoItem = screen.getByText(new RegExp(todo.title, 'i'));
      expect(todoItem).toBeInTheDocument();
      expect(todoItem.textContent).toContain(todo.title);
    });
  });
});
