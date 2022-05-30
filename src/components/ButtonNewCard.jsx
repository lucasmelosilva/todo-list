import { Plus } from "phosphor-react";

export function ButtonNewCard({ handleNewCard }) {
  return (
    <div className="fixed bottom-24 right-7 z-10">
      <button onClick={handleNewCard} className="bg-gray-800 rounded-full p-3">
        <Plus size="3em" className="text-slate-700 hover:text-slate-500  transition-colors" />
      </button>
    </div>
  )
}