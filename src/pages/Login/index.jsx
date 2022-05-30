import { GithubLogo, GoogleLogo } from "phosphor-react";

function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="md:w-2/6 w-full md:h-auto h-screen md:pt-12 md:pb-12 bg-gray-800 flex flex-col items-center md:justify-between justify-center">
        <h1>Login</h1>

        <button>
          Login with
          <GoogleLogo />
        </button>

        <p>ou</p>

        <button>
          Login with
          <GithubLogo />
        </button>
      </div>
    </div>
  )
}

export default Login;