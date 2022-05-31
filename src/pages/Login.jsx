import { GithubLogo, GoogleLogo } from "phosphor-react";

function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="md:w-2/6 w-full md:h-auto h-screen md:pt-12 md:pb-12 bg-gray-800 md:rounded-lg flex flex-col items-center md:justify-between justify-center">
        <h1 className="text-slate-400 font-bold text-4xl pb-14">Faça seu login</h1>

        <button className="bg-slate-700 text-xl text-slate-400 font-bold p-3 rounded-md w-64 flex justify-center items-center">
          Entrar com
          <GoogleLogo weight="bold" className="ml-4" />
        </button>

        <p className="text-gray-600 mt-3 mb-3">ou</p>

        <button className="bg-slate-700 text-xl text-slate-400 font-bold p-3 rounded-md w-64 flex justify-center items-center">
          Entrar com
          <GithubLogo weight="bold" className="ml-4" />
        </button>
      </div>
    </div>
  )
}

export default Login;