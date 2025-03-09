import { Link } from "react-router-dom";
import LoginButton from "../../components/ui/LoginButton";
import FirstHeader from "../../components/base/FirstHeader";

function Login() {
  return (
    <div>
      <FirstHeader />
      <div className="bg-dull-white rounded-2xl border mt-12 pt-12 pb-12 ml-6 mr-6">
        <h3 className="text-center">アカウントをお持ちの方</h3>

        <div className="flex justify-center items-center mt-6">
          <div className="flex flex-col items-start gap-4">
            <p>メールアドレス</p>
            <p>パスワード</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-6 ml-12 mr-12">
          <LoginButton buttontitle="ログイン" />
          <LoginButton buttontitle="Googleログイン" />
        </div>

        <h3 className="text-center mt-12">アカウントをお持ちでない場合</h3>

        <p className="text-blue text-center mt-4">
          <Link to="/Signup">新規登録</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
