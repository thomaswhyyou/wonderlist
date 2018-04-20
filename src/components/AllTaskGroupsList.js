import React from 'react';

import { TaskGroupRow } from './TaskGroupRow';
import { ListHeader } from './misc';



/*
 * AllTaskGroupsList
 *
 * List of all task groups.
 */
export class AllTaskGroupsList extends React.Component {

  renderTaskGroupRows() {
    const { tasksMap, taskIdsByGroupName, onClickForGroup } = this.props;

    return Object
      .entries(taskIdsByGroupName)
      .map(entry => {
        const [ groupName, taskIds ] = entry;
        const onClick = () => onClickForGroup(groupName);

        return (
          <TaskGroupRow
            key={groupName}
            groupName={groupName}
            taskIds={taskIds}
            tasksMap={tasksMap}
            onClick={onClick}
          />
        )
      });
  }

  render() {
    return (
      <div className="bg-white ph3 shadow-4">
        <ListHeader>Things To Do</ListHeader>
        {this.renderTaskGroupRows()}
      </div>
    );
  }
}
