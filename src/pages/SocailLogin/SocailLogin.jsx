import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const SocailLogin = () => {
  const { googleLogIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => console.log(result.user))
      .catch(error);
  };
  return (
    <div>
      <div className="text center flex justify-center">
        {" "}
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
