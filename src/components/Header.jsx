import { SignOut, UserCircle } from "phosphor-react";
import { ThemeButton  } from './ThemeButton';

export function Header() {
  return (
    <div className="w-full px-6 py-4 md:px-8 bg-primary-light flex items-center justify-between">
      <div className="flex items-center">
        <UserCircle size="48px" weight="thin" className="text-zinc-700" />

        <span className="ml-3 text-zinc-800">Lucas</span>
      </div>

      <div className="flex items-center">
        <ThemeButton />
        <button className="ml-11">
          <SignOut size="30px" weight="thin" className="text-zinc-700 hover:text-zinc-900 transition-colors" />
        </button>
      </div>
    </div>
  )
}
