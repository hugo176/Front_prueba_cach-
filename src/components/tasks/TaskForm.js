import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../../features/tasks/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const taskList = useSelector(state => state?.tasks);

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: [e.target.value]?.toString()
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params?.id) {
      dispatch(editTask({
        ...task
      }));
    } else {
      dispatch(addTask({
        ...task,
        id: Math.random() * 100
      }));
    };
    navigate('/');
  };

  useEffect(() => {
    if (params?.id) {
      setTask(taskList?.find(task => task?.id === params?.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
      <label
        htmlFor='tilte'
        className='block text-xs font-bold'
      >
        Título:
      </label>
      <input
        value={task?.title}
        name='title'
        type="text"
        placeholder='title'
        onChange={handleChange}
        className='w-full p-2 rounded-md bg-zinc-600 my-2'
      />
      <label
        htmlFor='description'
        className='block text-xs font-bold'
      >
        Descripción:
      </label>
      <textarea
        value={task?.description}
        name="description"
        placeholder='Description'
        onChange={handleChange}
        className='w-full p-2 rounded-md bg-zinc-600 my-2'
        >
      </textarea>
      <button
        className='bg-blue-300 px-2 py-1 rounded-md text-xs'
      >Guardar</button>
    </form>
  )
}

export default TaskForm;