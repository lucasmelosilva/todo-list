import { SignOut, UserCircle } from "phosphor-react";
import { ThemeButton } from './ThemeButton';

export function Header() {
  return (
    <div className="w-full px-6 py-4 md:px-8 bg-slate-200 dark:bg-gray-800 flex fixed top-0 items-center justify-between transition-colors duration-150">
      <div className="flex items-center">
        <UserCircle size="48px" weight="thin" className="text-zinc-700 dark:text-slate-400" />

        <span className="ml-3 text-zinc-800 dark:text-slate-400">Lucas</span>
      </div>

      <div className="flex items-center">
        <ThemeButton />
        <button className="ml-11">
          <SignOut size="30px" weight="thin" className="text-zinc-700 dark:text-slate-400 dark:hover:text-slate-200 hover:text-zinc-900 transition-colors" />
        </button>
      </div>
    </div>
  )
}
