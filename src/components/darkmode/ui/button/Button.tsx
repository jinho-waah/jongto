import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset"; // type 속성 추가
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  type = "button", // 기본 type 값을 button으로 설정
  className = "",
}) => {
  const baseStyles =
    "px-6 py-2 font-semibold rounded-lg transition-colors duration-300";
  const primaryStyles =
    "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500";
  const secondaryStyles =
    "bg-white text-indigo-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-yellow-400 dark:hover:bg-gray-600";

  const styles =
    variant === "primary"
      ? `${primaryStyles} ${className}`
      : `${secondaryStyles} ${className}`;

  return (
    <button type={type} className={`${baseStyles} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
