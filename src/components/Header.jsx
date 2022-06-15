import { SignOut, UserCircle } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full px-6 py-4 md:px-8 bg-gray-800 flex fixed top-0 items-center justify-between">
      <div className="w-full px-6 py-4 md:px-8 bg-gray-800 flex fixed top-0 items-center justify-between">
        <div className="flex items-center">
          <UserCircle size="48px" weight="thin" className="text-slate-400" />

          <span className="ml-3 text-slate-400">Lucas</span>
        </div>

        <div className="flex items-center">
          <button className="ml-11">
            <SignOut size="30px" weight="thin" className="text-slate-400 hover:text-slate-500  transition-colors" />
          </button>
        </div>
      </div>
    </header>
  )
}
