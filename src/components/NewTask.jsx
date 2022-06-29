import { useState } from 'react'
import { FloppyDisk } from 'phosphor-react';

function NewTask({ handleNewTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTask(task);
    setTask('');
  }

  return (
    <form className="w-[90%] md:w-[80%] mx-auto flex gap-2 items-center " >
      <input
        type="text"
        className="bg-gray-800 p-3 py-[16px] flex-grow rounded-md text-slate-500"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type='submit' onClick={handleSubmit} className="bg-gray-800 rounded-md p-3" disabled={task.length === 0}>
        <FloppyDisk size="2rem" className="text-slate-700 hover:text-slate-500  transition-colors" />
      </button>
    </form>
  )
}

export {
  NewTask
}