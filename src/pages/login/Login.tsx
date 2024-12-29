import { useState } from "react";
import { Button } from "@/components/button/Button";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="relative w-[900px] h-[500px] flex overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800">
        {/* Moving Block */}
        <div
          className={`absolute inset-0 w-1/2 h-full bg-gradient-to-br from-indigo-500 via-purple-400 to-yellow-500 text-white flex flex-col items-center justify-center transition-transform duration-500 ${
            isSignUp ? "translate-x-full" : "translate-x-0"
          } z-10`}
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "다시 오신 것을 환영합니다!" : "환영합니다!"}
          </h2>
          <p className="text-center px-4 mb-6">
            {isSignUp
              ? "새로운 계정을 만들어 보세요!"
              : "계정을 이미 가지고 계신가요? 로그인 해주세요!"}
          </p>
          <Button onClick={toggleAuthMode} variant="secondary">
            {isSignUp ? "회원가입" : "로그인"}
          </Button>
        </div>

        {/* Login Form */}
        <div className="absolute inset-y-0 left-0 w-1/2 h-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center z-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            로그인
          </h2>
          <form className="w-3/4 flex flex-col gap-4">
            <input
              type="email"
              placeholder="이메일"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400"
            />
            <Button type="submit">로그인</Button>
          </form>
        </div>

        {/* Signup Form */}
        <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center z-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            회원가입
          </h2>
          <form className="w-3/4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="이름"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="이메일"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-400"
            />
            <Button type="submit">회원가입</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
