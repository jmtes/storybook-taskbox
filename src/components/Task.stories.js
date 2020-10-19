import React from 'react';

import Task from './Task';

export default {
  title: 'Task',
  component: Task
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date()
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta, eros quis mollis dictum, est ante efficitur nunc, eget pulvinar ex mi sed lorem'
  }
};
