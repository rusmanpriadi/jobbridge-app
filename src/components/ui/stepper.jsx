import React from "react";
import { cn } from "../../lib/utils"; // Shadcn's utility for conditional classes

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-center w-full">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex items-center">
            {/* Step Indicator */}
            <div
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full border",
                isCompleted
                  ? "bg-primary text-white"
                  : isActive
                  ? "bg-primary/10 border-primary text-primary"
                  : "border-gray-300 text-gray-500"
              )}
            >
              {isCompleted ? (
                <span className="text-white">✓</span>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>

            {/* Step Label */}
            <div className="ml-2">
              <span
                className={cn(
                  "text-sm font-medium",
                  isActive ? "text-primary" : "text-gray-500"
                )}
              >
                {step}
              </span>
            </div>

            {/* Line connecting the steps */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-1 mx-4 bg-gray-300">
                <div
                  className={cn(
                    "h-1",
                    isCompleted ? "bg-primary" : "bg-gray-300"
                  )}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
