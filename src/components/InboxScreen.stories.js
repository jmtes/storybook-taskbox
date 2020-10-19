import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { PureInboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';

// Simple mock of a redux store
const store = {
  getState: () => ({ tasks: TaskListStories.Default.args.tasks }),
  subscribe: () => 0,
  dispatch: action('dispatch')
};

export default {
  title: 'Inbox Screen',
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>]
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something'
};
