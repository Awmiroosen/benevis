type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: ButtonVariant;
};

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-stone-800 text-stone-200 dark:bg-stone-200 dark:text-stone-800 hover:bg-stone-900 dark:hover:bg-stone-100",
  secondary: "border border-stone-700 dark:border-stone-400",
  danger: "hover:bg-red-600 hover:text-stone-200",
};

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonType) => {
  return (
    <button
      {...props}
      className={`px-2 py-0.5 cursor-pointer rounded-xl flex items-center transition-colors duration-150 ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
