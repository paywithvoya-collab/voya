function getStepStatus(index, currentStep) {
  if (index < currentStep) {
    return "complete";
  }

  if (index === currentStep) {
    return "current";
  }

  return "upcoming";
}

const stepClasses = {
  complete: "bg-[var(--color-brand-primary)]",
  current: "bg-[var(--color-brand-primary)]",
  upcoming: "bg-[#ececec]",
};

export default function ProgressSteps({
  className = "",
  currentStep = 0,
  stepClassName = "",
  totalSteps = 5,
}) {
  return (
    <div
      aria-label={`Step ${currentStep + 1} of ${totalSteps}`}
      className={`flex items-center gap-3 ${className}`.trim()}
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuenow={currentStep + 1}
    >
      {Array.from({ length: totalSteps }, (_, index) => {
        const status = getStepStatus(index, currentStep);

        return (
          <span
            key={`${status}-${index}`}
            className={`h-1.5 flex-1 rounded-full ${stepClasses[status]} ${stepClassName}`.trim()}
          />
        );
      })}
    </div>
  );
}
