import { Trash } from 'phosphor-react'

export function Card({ title, content }) {
  return (
    <div className='w-52 bg-yellow-500 rounded-xl p-2'>
      <div className='flex items-center justify-between mb-3'>
        <h2>{title}</h2>

        <button>
          <Trash />
        </button>
      </div>

      <p>{
        content.length < 100 ? content : content.substring(0, 100) + "..."
      } </p>
    </div>
  )
}