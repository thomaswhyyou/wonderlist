import React from 'react';

import { AllTaskGroupsList } from './AllTaskGroupsList';
import { GroupTaskItemsList } from './GroupTaskItemsList';



/*
 * TodoList
 *
 * Main todo list widget component
 */
export class TodoList extends React.Component {

  constructor(props) {
    super(props);

    const {
      tasksMap,
      taskIdsByGroupName,
    } = this.parseTasksList(props.tasks);

    this.state = {
      tasksMap,
      taskGroupInView: null,
    };

    this.taskIdsByGroupName = taskIdsByGroupName;

    this.unsetTaskGroupInView = this.unsetTaskGroupInView.bind(this);
    this.setTaskGroupInView = this.setTaskGroupInView.bind(this);
    this.toggleTaskItemStatus = this.toggleTaskItemStatus.bind(this);
  }

  // Iterate tasks list at init time once, to organize into
  // data structures that are easier and more efficient to use.
  parseTasksList(tasks = []) {
    // task id -> task obj, for O(1) lookup
    const tasksMap = {};
    // task group name -> list of task IDs
    const taskIdsByGroupName = {};

    for (const task of tasks) {
      tasksMap[task.id] = task;

      const taskIds = taskIdsByGroupName[task.group] || [];
      taskIdsByGroupName[task.group] = [ ...taskIds, task.id ];
    }

    return { tasksMap, taskIdsByGroupName };
  }

  unsetTaskGroupInView() {
    this.setState({ taskGroupInView: null });
  }

  setTaskGroupInView(groupName) {
    this.setState({ taskGroupInView: groupName });
  }

  toggleTaskItemStatus(taskId) {
    const task = this.state.tasksMap[taskId];
    const completedAt = task.completedAt ? null : Date.now();
    task.completedAt = completedAt;

    const tasksMap = {
      ...this.state.tasksMap,
      taskId: task,
    };
    this.setState({ tasksMap });
  }

  render() {
    const { tasksMap, taskGroupInView } = this.state;

    return (
      <div>
        {taskGroupInView ? (
          <GroupTaskItemsList
            tasksMap={tasksMap}
            taskIds={this.taskIdsByGroupName[taskGroupInView]}
            groupName={taskGroupInView}
            onClickShowAllGroups={this.unsetTaskGroupInView}
            onClickToggleTaskStatus={this.toggleTaskItemStatus}
          />
        ) : (
          <AllTaskGroupsList
            tasksMap={tasksMap}
            taskIdsByGroupName={this.taskIdsByGroupName}
            onClickForGroup={this.setTaskGroupInView}
          />
        )}
      </div>
    );
  }
}
