import clsx from 'clsx';
import React from 'react';

// ...rest will pass the children prop directly to the div element.

const overflowOptions = {
  auto: 'overflow-auto',
  hidden: 'overflow-hidden',
  x: 'overflow-x-auto',
  y: 'overflow-y-auto',
};

interface ContentContainerType {
  overflow?: keyof typeof overflowOptions;
  className?: string;
  children: React.ReactNode;
}

export const ContentContainer = ({
  overflow = 'auto',
  className,
  ...rest
}: ContentContainerType) => {
  return (
    <div
      className={clsx(
        className,
        overflowOptions[overflow],
        'relative flex-1 flex-grow',
      )}
      {...rest}
    />
  );
};
