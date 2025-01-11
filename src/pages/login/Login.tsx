export default function Login() {
  const handleSocialLogin = (provider: "naver" | "kakao" | "google") => {
    let authUrl = "";

    switch (provider) {
      case "naver":
        authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
          import.meta.env.VITE_NAVER_CLIENT_ID
        }&redirect_uri=${
          import.meta.env.VITE_NAVER_REDIRECT_URI
        }&state=random_state`;
        break;
      case "kakao":
        authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
          import.meta.env.VITE_KAKAO_CLIENT_ID
        }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
        break;
      case "google":
        authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
          import.meta.env.VITE_GOOGLE_CLIENT_ID
        }&redirect_uri=${
          import.meta.env.VITE_GOOGLE_REDIRECT_URI
        }&response_type=code&scope=email profile openid`;
        break;
      default:
        return;
    }

    window.location.href = authUrl;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back!
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            소셜 계정으로 간편하게 로그인하세요
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleSocialLogin("naver")}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#03C75A] px-6 py-3 text-white transition-transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#03C75A] focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
              <path d="M11.84 12.1v-4.2L8.16 12.1V7.9h-2v4.2l3.68-4.2v4.2h2zM10 2a8 8 0 100 16 8 8 0 000-16z" />
            </svg>
            네이버로 계속하기
          </button>

          <button
            onClick={() => handleSocialLogin("kakao")}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#FEE500] px-6 py-3 text-[#391B1B] transition-transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FEE500] focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 3c-4.42 0-8 2.81-8 6.28 0 2.24 1.49 4.22 3.74 5.34-.16.57-.57 2.07-.66 2.39-.1.4.15.39.31.28.13-.08 2.07-1.41 2.91-1.98.55.08 1.12.13 1.7.13 4.42 0 8-2.81 8-6.28S14.42 3 10 3z" />
            </svg>
            카카오로 계속하기
          </button>

          {/* 구글 로그인 버튼 */}
          <button
            onClick={() => handleSocialLogin("google")}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 text-gray-600 shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20">
              <path
                d="M18.92 8.01c.144.654.144 1.332.144 2.01 0 3.998-2.698 6.84-6.72 6.84-3.866 0-7-3.134-7-7s3.134-7 7-7c1.87 0 3.44.688 4.656 1.812l-1.89 1.89c-.518-.494-1.424-1.068-2.766-1.068-2.374 0-4.312 1.962-4.312 4.366 0 2.404 1.938 4.366 4.312 4.366 2.744 0 3.774-1.97 3.934-2.988h-3.934v-2.49h6.576z"
                fill="#4285F4"
              />
            </svg>
            구글로 계속하기
          </button>
        </div>
      </div>
    </div>
  );
}
