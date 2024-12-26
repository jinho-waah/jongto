import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-indigo-600 dark:bg-dark text-white shadow-md dark:border-b-2 dark:border-black">
      <div className="w-full px-4 py-3 flex items-center">
        <h1 className="text-3xl font-bold cursor-pointer" onClick={handleClick}>
          종토방
        </h1>
        <button className="ml-auto text-sm font-semibold">로그인</button>
      </div>
    </header>
  );
}
