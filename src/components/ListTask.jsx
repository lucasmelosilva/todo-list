import { Task } from "./Task"

function ListTask({ tasks, handleStatusChange, handleDelete }) {
  return (
    <div className='w-full flex flex-col  gap-2 p-4'>

      {
        tasks.map(({ status, content }, index) => {
          return (
            <Task
              key={index}
              index={index}
              status={status}
              content={content}
              handleStatusChange={handleStatusChange}
              handleDelete={handleDelete}
            />
          )
        })}

    </div>
  )
}

export { ListTask }