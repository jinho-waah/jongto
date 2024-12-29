import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean; // 비활성화 여부
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false, // 기본값: 활성화 상태
}) => {
  const baseStyles =
    "px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400";

  const disabledStyles = disabled
    ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500"
    : "";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${disabledStyles} ${className}`}
      disabled={disabled}
    />
  );
};
