import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleMain = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="bg-indigo-600 dark:bg-dark text-white shadow-md border-b border-indigo-700 dark:border-black">
      <div className="w-full px-4 py-3 flex items-center">
        <h1 className="text-3xl font-bold cursor-pointer" onClick={handleMain}>
          종토방
        </h1>
        <button className="ml-auto text-sm font-semibold" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </header>
  );
}
