import React from "react";

type LoginButtonProps = {
  buttontitle: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ buttontitle }) => {
  return (
    <button className="pl-12 pr-12 pt-1 pb-1 rounded-full text-dull-white bg-blue">
      {buttontitle}
    </button>
  );
};

export default LoginButton;
