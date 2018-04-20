import React from 'react';

import { TaskItemRow } from './TaskItemRow';
import { ListHeader } from './misc';


const BackButton = ({children, onClick}) => (
  <span className="f7 ttu blue o-80 pointer" onClick={onClick}>
    {children}
  </span>
);


/*
 * GroupTaskItemsList
 *
 * List of task items for a group.
 */
export class GroupTaskItemsList extends React.Component {

  renderTaskItemRows() {
    const { taskIds = [], tasksMap, onClickToggleTaskStatus } = this.props;

    return taskIds.map(id => {
      const task = tasksMap[id];

      // For simplicity, assume no future date.
      const isCompleted = !!task.completedAt;

      const blockers = task
        .dependencyIds
        .map(depId => tasksMap[depId])
        .filter(d => d)  // ignore invalid dependencies
        .filter(d => d.completedAt === null)
      const isBlocked = blockers.length > 0;

      const onClick = () => onClickToggleTaskStatus(id);

      return (
        <TaskItemRow
          key={id}
          taskName={task.task}
          isCompleted={isCompleted}
          isBlocked={isBlocked}
          onClick={onClick}
        />
      );
    });
  }

  render() {
    const { groupName, onClickShowAllGroups } = this.props;

    return (
      <div className="bg-white ph3 shadow-4">
        <ListHeader>
          <div className="flex items-end justify-between w-100">
            <span>{groupName}</span>
            <BackButton onClick={onClickShowAllGroups}>
              All Groups
            </BackButton>
          </div>
        </ListHeader>

        {this.renderTaskItemRows()}
      </div>
    );
  }
}
