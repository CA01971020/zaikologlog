import { Link } from "react-router-dom";
import FirstHeader from "../../components/base/FirstHeader";
import LoginButton from "../../components/ui/LoginButton";

const Signup: React.FC = () => {
  return (
    <div>
      <FirstHeader />
      <div className="relative bg-dull-white rounded-2xl border mt-12 pt-12 pb-12 ml-6 mr-6">
        <p className="absolute top-6 right-6">
          <Link to="/">戻る</Link>
        </p>
        <h3 className="text-center">新規ユーザー登録</h3>

        <div className="flex justify-center items-center mt-6">
          <div className="flex flex-col items-start gap-4">
            <p>メールアドレス</p>
            <p>パスワード</p>
          </div>
        </div>

        <div className="flex flex-col mt-6 ml-12 mr-12">
          <LoginButton buttontitle="新規登録" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
