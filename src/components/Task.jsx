import { CheckCircle, Circle, Trash } from 'phosphor-react'

function Task({ index, status, content, handleStatusChange, handleDelete }) {


  return (
    <div className='bg-gray-800 flex items-center justify-between mb-3 p-3 rounded-md'>
      <button
        onClick={() => handleStatusChange(index)}
        className='text-slate-700 hover:text-slate-500  transition-colors text-[24px]'
      >
        {
          status === 'done' ? (
            <CheckCircle />
          ) : (
            <Circle />
          )
        }
      </button>

      <p className='text-slate-500'>{
        content
      } </p>

      <button
        onClick={() => handleDelete(index)}
        className='text-slate-700 hover:text-slate-500  transition-colors text-[24px]'
      >
        <Trash />
      </button>
    </div>
  )
}

export { Task };