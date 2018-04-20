import React from 'react';

const ROW_HEIGHT = 16 * 4.5;  // px


export const Row = ({className, children, ...props}) => (
  <div
    className={`flex items-center bb b--light-gray ${className}`}
    style={{ height: ROW_HEIGHT, borderWidth: '1px' }}
    {...props}
  >
    {children}
  </div>
);


export const PrimaryLabel = ({children, className}) => (
  <div className={`mid-gray fw5 mv1 ${className}`}>
    {children}
  </div>
);
export const SecondaryLabel = ({children, className}) => (
  <div className={`moon-gray fw3 mv1 ${className}`}>
    {children}
  </div>
);


export const IconContainer = ({children, icon}) => (
  <div
    className="flex justify-start items-center"
    style={{ width: ROW_HEIGHT * 0.6 }}
  >
    {icon}
  </div>
);


export const ListHeader = ({children, className}) => (
  <Row className={`f4 black-60 ${className}`}>
    {children}
  </Row>
);
