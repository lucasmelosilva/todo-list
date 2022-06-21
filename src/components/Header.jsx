import { SignOut, UserCircle } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full py-4 bg-gray-800 flex fixed top-0 items-center justify-center">
      <div className="w-[90%] md:w-[80%]  bg-gray-800 flex items-center justify-between">
        <div className="flex items-center">
          <UserCircle size="48px" weight="thin" className="text-slate-400" />

          <span className="ml-3 text-slate-400">Lucas</span>
        </div>

        <button className="ml-11">
          <SignOut size="30px" weight="thin" className="text-slate-400 hover:text-slate-500  transition-colors" />
        </button>

      </div>
    </header>
  )
}
