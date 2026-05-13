import Button from "../../../../components/ui/Button";
import { ArrowRightIcon } from "../../../../components/ui/Icons";

export default function RoleOptionButton({ children, variant = "primary", ...props }) {
  return (
    <Button
      variant={variant}
      className="rounded-xl text-[15px] font-medium tracking-[-0.01em]"
      endIcon={<ArrowRightIcon className="h-4 w-4" />}
      {...props}
    >
      {children}
    </Button>
  );
}
