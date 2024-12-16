import { Checkbox } from '@/components/ui/checkbox';
import type { Todo } from '@/types';

export const TodoCard = ({ ...props }: Todo) => {
  const completedStyle = `${props.completed ? 'line-through' : ''}`;
  return (
    <div className='flex justify-between items-center p-6 border rounded-md'>
      <p className={`leading-7 [&:not(:first-child)]:mt-6 ${completedStyle}`}>{props.title}</p>
      <Checkbox
        data-testid={`todo-item-checkbox-${props.id}`}
        checked={props.completed}
      />
    </div>
  );
};
