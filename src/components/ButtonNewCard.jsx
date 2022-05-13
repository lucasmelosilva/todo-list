import { Plus } from "phosphor-react";

export function ButtonNewCard({ handleNewCard }) {
  return (
    <div className="absolute bottom-24 right-7 z-10">
      <button onClick={handleNewCard} className="bg-zinc-300  dark:bg-gray-800 rounded-full p-3">
        <Plus size="5em" className="text-zinc-500 dark:text-slate-700 dark:hover:text-slate-500 hover:text-zinc-700 transition-colors" />
      </button>
    </div>
  )
}