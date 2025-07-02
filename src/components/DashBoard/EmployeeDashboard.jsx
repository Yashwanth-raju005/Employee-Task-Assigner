/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = (props) => {
  // console.log(data)

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
