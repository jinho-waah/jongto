interface BoxProps {
  title: string;
  children: React.ReactNode;
}

export const Box = ({ title, children }: BoxProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-dark shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="p-4 border-b dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
};
