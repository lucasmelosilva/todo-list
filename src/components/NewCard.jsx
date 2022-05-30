import { FloppyDisk, X } from "phosphor-react";

export function NewCard({
  handleNewCard
}) {
  return (
    <form className='w-[90%] md:w-[50em bg-gray-800 rounded-xl p-2 z-10 fixed top-24 md:top-40 right-1/2 translate-x-1/2'>
      <div className='flex items-center justify-between mb-3'>


        <input type="text" className="p-2 text-[.8em]  md:text-xl w-[15em] bg-gray-600 rounded-md" />

        <div>
          <button tyoe="submit" className="p-2 mr-1">
            <FloppyDisk weight="thin" size="2em" className="text-slate-400 hover:text-slate-500 transition-colors" />
          </button>
          <button type='button' className="p-2" onClick={handleNewCard}>
            <X weight="thin" size="2em" className="text-slate-400 hover:text-slate-500 transition-colors" />
          </button>
        </div>

      </div>

      <div className="w-[100%]">
        <textarea className="w-full p-3 text-xl bg-gray-600 text-slate-200 rounded-md" cols="20" rows="10"></textarea>
      </div>
    </form>
  )
}