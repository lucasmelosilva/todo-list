import { useState } from 'react';

import { ListTask } from './ListTask';
import { ButtonNewTask } from './ButtonNewTask';

export function Main() {
  const [tasks, setTasks] = useState(['estudar ingles']);

  function handleNewTask(newTask) {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }
  return (
    <div className='mt-[80px] mb-[80px]'>
      <ButtonNewTask handleNewTask={handleNewTask} />
      <ListTask />
    </div>
  )

}