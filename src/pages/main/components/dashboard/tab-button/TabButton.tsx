interface TabButtonProps {
  setter: (value: string) => void;
  value: string;
  activeTab: string;
  label: string;
}

export const TabButton = ({
  setter,
  value,
  activeTab,
  label,
}: TabButtonProps) => {
  return (
    <button
      onClick={() => setter(value)}
      className={`flex-1 p-3 text-center ${
        activeTab === value
          ? "text-blue-600 border-b-2 border-blue-600 dark:text-yellow-400 dark:border-yellow-400"
          : "text-gray-500 dark:text-gray-400"
      }`}
    >
      {label}
    </button>
  );
};
