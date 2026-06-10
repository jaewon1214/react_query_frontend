import React from 'react'
import { useState } from 'react'
import Todotemplet from '../no2_components/todo/Todotemplet'
import Todoinsert from '../no2_components/todo/Todoinsert'
import TodoList from '../no2_components/todo/TodoList'

const TodoPage = () => {

  return (
    <Todotemplet>
      <Todoinsert />
      <TodoList />
    </Todotemplet>
  )
}

export default TodoPage
