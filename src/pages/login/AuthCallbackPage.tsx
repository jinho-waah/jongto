import { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "@/constants";

export default function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const { provider } = useParams<{ provider: string }>();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  console.log(code);

  useEffect(() => {
    if (!code || !provider) return;
    console.log(code);
    const fetchAccessToken = async () => {
      try {
        let endpoint = "";

        switch (provider) {
          case "naver":
            endpoint = `${URL}/api/auth/naver`;
            break;
          case "kakao":
            endpoint = `${URL}/api/auth/kakao`;
            break;
          case "google":
            endpoint = `${URL}/api/auth/google`;
            break;
          default:
            console.error("지원하지 않는 제공자입니다.");
            return;
        }

        const response = await axios.post(endpoint, { code, state });
        console.log(response);
        console.log(`${provider} 로그인 성공:`, response.data);

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        // 메인 페이지로 리다이렉트
        window.location.href = "/";
      } catch (error) {
        console.error(`${provider} 로그인 실패:`, error);
      }
    };

    fetchAccessToken();
  }, [code, state, provider]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>로그인 처리 중...</p>
    </div>
  );
}
