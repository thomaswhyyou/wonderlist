import React from 'react';

import { RightArrow } from './icons';
import { Row, IconContainer, PrimaryLabel, SecondaryLabel } from './misc';


/*
 * TaskGroupRow
 *
 * Row displaying a task group.
 */
export const TaskGroupRow = ({
  groupName,
  tasksMap = {},
  taskIds = [],
  ...props
}) => {
  const tasks = taskIds.map(id => tasksMap[id]);
  const completedTasks = tasks.filter(task => !!task.completedAt);

  const groupStatus = `${completedTasks.length} of ${tasks.length} tasks complete`;

  return (
    <Row className="pointer" {...props}>
      <div className="flex">
        <IconContainer icon={<RightArrow />} />

        <div>
          <PrimaryLabel className="f6">
            {groupName}
          </PrimaryLabel>
          <SecondaryLabel className="f7 ttu">
            {groupStatus}
          </SecondaryLabel>
        </div>
      </div>
    </Row>
  );
};
