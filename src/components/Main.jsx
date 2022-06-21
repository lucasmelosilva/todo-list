import { useState } from 'react';

import { ListTask } from './ListTask';
import { NewTask } from './NewTask';
import { NothingToDo } from './NothingToDo';

export function Main() {
  const [tasks, setTasks] = useState([{ status: 'done', content: 'make dinner' }, { status: 'progress', content: 'make breakfast' }]);

  function handleNewTask(newTask) {
    setTasks([...tasks, { status: 'progress', content: newTask }]);
    console.log(tasks);
  }

  function handleStatusChange(index) {
    let changedTask = { ...tasks[index] };
    tasks[index].status === 'progress' ? changedTask = { ...changedTask, status: 'done' } : changedTask = { ...changedTask, status: 'progress' };

    setTasks([...tasks.slice(0, index), changedTask, ...tasks.slice(index + 1)]);
  }

  function deleteTask(index) {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  }
  return (
    <div className='w-[90%] md:w-[80%] mt-[100px] mb-[80px] mx-auto'>

      {
        tasks.length === 0 ? (
          <NothingToDo />
        ) : (
          <ListTask
            tasks={tasks}
            handleStatusChange={handleStatusChange}
            handleDelete={deleteTask}
          />
        )
      }

      <NewTask handleNewTask={handleNewTask} />
    </div>
  )

}