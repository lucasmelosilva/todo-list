import { useState } from 'react';

import { ListTask } from './ListTask';
import { NewTask } from './NewTask';
import { NothingToDo } from './NothingToDo';

export function Main() {
  const [tasks, setTasks] = useState([{ status: 'done', content: 'make dinner' }, { status: 'todo', content: 'make breakfast' }]);

  function handleNewTask(newTask) {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }
  return (
    <div className='mt-[80px] mb-[80px]'>

      {
        tasks.length === 0 ? (
          <NothingToDo />
        ) : (
          <ListTask tasks={tasks} />
        )
      }

      <NewTask handleNewTask={handleNewTask} />
    </div>
  )

}