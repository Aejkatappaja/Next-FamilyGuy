import React, { ReactNode, ElementType, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
}

export const Container = ({
  as: Element = "div",
  children,
  className,
  ...rest
}: ContainerProps) => {
  return (
    <Element
      {...rest}
      className={`px-5 w-full max-w-screen-md m-auto ${className}`}
    >
      {children}
    </Element>
  );
};
