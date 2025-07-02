/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!taskTitle || !taskDate || !assignTo || !category || !taskDescription) {
      alert('Please fill all fields');
      return;
    }

    const task = {
      title: taskTitle,
      description: taskDescription,
      taskData: taskDate,
      category: category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // ✅ Update employee data with new task
    const updatedData = userData.map((employee) => {
      if (employee.firstName.toLowerCase() === assignTo.toLowerCase()) {
        const updatedTasks = [...employee.tasks, task];
        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1,
          },
        };
      }
      return employee;
    });

    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData)); // ✅ Sync with localStorage

    // ✅ Clear form
    setTaskTitle('');
    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex w-full flex-wrap items-start justify-between">
        <div className="w-1/2">
          <div className="mb-5">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
            />
          </div>

          <div className="mb-5">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="date"
            />
          </div>

          <div className="mb-5">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div className="mb-5">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-[600px]">
          <h3 className="w-2/5 flex flex-col items-start text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Describe the task"
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
