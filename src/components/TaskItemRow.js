import React from 'react';

import { Locked, CheckboxEmpty, CheckboxFilled } from './icons';
import { Row, IconContainer, PrimaryLabel, SecondaryLabel } from './misc';


// util func for doing nothing.
const noop = () => {};



/*
 * TaskItemRow
 *
 * Row displaying a task item.
 */
export const TaskItemRow = ({
  taskName,
  isCompleted,
  isBlocked,
  onClick,
  ...props
}) => {
  let LabelTag = isBlocked ? SecondaryLabel : PrimaryLabel;
  if (isCompleted) {
    LabelTag = PrimaryLabel;
  }

  let RowIcon = isCompleted ? CheckboxFilled : CheckboxEmpty;

  const isDisabled = isBlocked && !isCompleted;
  if (isDisabled) {
    RowIcon = Locked;
  }

  return (
    <Row
      className="f6 pointer"
      onClick={isDisabled ? noop : onClick}
      {...props}
    >
      <div className="flex">
        <IconContainer icon={<RowIcon />} />

        <LabelTag className={isCompleted && 'strike'}>
          {taskName}
        </LabelTag>
      </div>
    </Row>
  );
};
