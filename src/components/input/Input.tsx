import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  name?: string; // name 속성 추가
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean; // 비활성화 여부
  readOnly?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  name, // name 속성 추가
  onChange,
  className = "",
  disabled = false,
  readOnly = false,
}) => {
  const baseStyles =
    "px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400";

  const disabledStyles = disabled
    ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500"
    : "";

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${disabledStyles} ${className}`}
      disabled={disabled}
      readOnly={readOnly}
    />
  );
};
