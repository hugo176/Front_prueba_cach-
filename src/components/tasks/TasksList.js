import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

const TasksList = () => {

  const dispatch = useDispatch();

  const taskList = useSelector(state => state.tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <div className='w-2/3'>
      <header className='flex justify-between items-center py-4'>
        <h1> Tareas {taskList?.length}</h1>
        <Link
          to='create-task'
          className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'
        >Crear tarea</Link>
      </header>
      <div className='grid grid-cols-3 gap-4'>
        {
          taskList?.map(task => (
            <div key={task?.id} className='bg-neutral-800 p-4 rounded-md'>
              <header className='flex justify-between'>
                <h3>{task?.title}</h3>
                <div className='flex gap-x-2'>
                  <Link 
                    to={`/edit-task/${task?.id}`}
                    className='bg-zinc-600 px-2 py-1 text-xs rounded-md self center'  
                  >Editar</Link>
                  <button 
                    onClick={() => handleDelete(task?.id)}
                    className='bg-red-500 px-2 py-1 text-xs rounded-md'
                  >Eliminar</button>
                </div>
              </header>
              <p>{task?.description}</p>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default TasksList;