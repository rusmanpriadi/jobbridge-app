import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const FloatingInput = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        className={cn("peer", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingInput.displayName = "FloatingInput";

const FloatingLabel = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-sm text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";


const FloatingLabelInput = React.forwardRef(({ id, label, error, ...props }, ref) => {
  return (
    <div>
      <div className="relative">
        <FloatingInput ref={ref} id={id} {...props} />
        <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
      </div>
      {error && (
        <span className="text-destructive block !mt-[5px] text-[12px]">
          {error}
        </span>
      )}
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingInput, FloatingLabel, FloatingLabelInput };
