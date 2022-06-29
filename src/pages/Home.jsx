import { useState } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NothingToDo } from '../components/NothingToDo';
import { ListTask } from '../components/ListTask';
import { NewTask } from '../components/NewTask';


function Home() {
  const [tasks, setTasks] = useState([{ status: 'done', content: 'make dinner' }, { status: 'done', content: 'make dinner' }, { status: 'done', content: 'make dinner' },
  { status: 'done', content: 'make dinner' }, { status: 'done', content: 'make dinner' }, { status: 'done', content: 'make dinner' }, { status: 'done', content: 'make dinner' }, { status: 'done', content: 'make dinner' }, { status: 'done', content: 'make dinner' }]);

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
    <>
      <Header />

      <div className='w-[90%] md:w-[80%] h-[calc(100vh-90px-90px-66px)] mt-[100px] mx-auto'>

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

      </div>

      <NewTask handleNewTask={handleNewTask} />
      <Footer />
    </>
  )
}

export default Home;