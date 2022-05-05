import { SignOut, UserCircle } from "phosphor-react";

export function Header() {
  return (
    <div className="w-full px-6 py-4 md:px-8 bg-zinc-200 flex items-center justify-between">
      <div className="flex items-center">
        <UserCircle size="48px" weight="thin" className="text-zinc-700" />

        <span className="ml-3 text-zinc-800">Lucas</span>
      </div>

      <button>
        <SignOut size="30px" weight="thin" className="text-zinc-700 hover:text-zinc-900 transition-colors" />
      </button>
    </div>
  )
}