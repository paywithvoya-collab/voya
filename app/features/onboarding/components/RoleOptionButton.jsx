import Button from "../../../components/ui/Button";

export default function RoleOptionButton({ children, variant = "primary", ...props }) {
  return (
    <Button
      variant={variant}
      className="rounded-xl text-[15px] font-medium tracking-[-0.01em]"
      endIcon="→"
      {...props}
    >
      {children}
    </Button>
  );
}
