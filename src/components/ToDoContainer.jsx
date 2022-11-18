import React, { useState } from 'react'
import { Button, ComponentsContainer, Input, TasksListStyled, Title, ToDoContainerStyled, TaskStyled } from './ToDoStyles'

export const ToDoContainer = () => {
  
  const [tasks, setTasks] = useState([])
  const [counter, setCounter] = useState(0)
  const [task, setTask] = useState("")

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTask(e.target.value)
      addTask(task)
    }
  }

  const addTask = (task) => {

    if (task === "") {
      window.alert("The task is empty!")
      return
    }
    setTasks( (tasks) => {
      let numeredTask = counter + " - " + task;
      console.log(numeredTask)
      setCounter(counter + 1)
      return tasks = [...tasks, numeredTask]
    })
  }

  const deleteTasks = () => {
    setCounter(0)
    setTasks([])
  }
  
  return (
    <>
    <ComponentsContainer>
        <ToDoContainerStyled>
          <Title>ToDo List! Add your tasks</Title>
          <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => handleEnter(e) }
          />
          <Button onClick={() => addTask(task)}>Add Task</Button>
          <Button onClick={() => deleteTasks()}>Delete All</Button>
        </ToDoContainerStyled>

        <TasksListStyled>
          <Title>Saved Tasks</Title>
          {tasks.map( (task) => {
            return <TaskStyled key={task}>{task}</TaskStyled>
          })}
        </TasksListStyled>
      </ComponentsContainer>

    </>
  )
}
