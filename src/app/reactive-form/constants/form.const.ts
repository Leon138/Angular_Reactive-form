import { ITaskStatus, ITaskType } from '../interfaces/form.interfaces';

export const TASK_TYPES: ITaskType[] = [
  {
    id: 'urgent',
    value: 'срочное',
  },
  {
    id: 'nonUrgent',
    value: 'не срочное',
  },
];

export const TASK_STATUS: ITaskStatus[] = [
  {
    id: 'completed',
    value: 'выполнено',
  },
  {
    id: 'failed',
    value: 'не выполнено',
  },
];

export const WEEK_DAYS: string[] = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export const LABELS = {
  types: 'Тип задания',
  status: 'Статус Здания',
};
