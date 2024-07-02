import { forwardRef } from "react";
import clsx from "clsx";

// Typing for ContainerOuter
export const ContainerOuter = forwardRef<
  React.ElementRef<"div">, // Type of the underlying DOM node
  React.ComponentPropsWithoutRef<"div"> // Props excluding the ref
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx("sm:px-8 border-2 border-blue-500", className)}
      {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8 border-2 border-red-500">
        {children}
      </div>
    </div>
  );
});

// Typing for ContainerInner
export const ContainerInner = forwardRef<
  React.ElementRef<"div">, // Type of the underlying DOM node
  React.ComponentPropsWithoutRef<"div"> // Props excluding the ref
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx(
        "relative px-4 sm:px-8 lg:px-12 border-2 border-yellow-500",
        className
      )}
      {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl  border-2 border-green-500">
        {children}
      </div>
    </div>
  );
});

// Typing for Container
export const Container = forwardRef<
  React.ElementRef<typeof ContainerOuter>, // Type of the ContainerOuter component instance
  React.ComponentPropsWithoutRef<typeof ContainerOuter> // Props of ContainerOuter excluding the ref
>(function Container({ children, ...props }, ref) {
  return (
    <ContainerOuter ref={ref} {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
});
