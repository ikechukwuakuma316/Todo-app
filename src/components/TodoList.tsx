import { FC, Fragment, memo } from "react";
import { Todo as ITodo } from "../types";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const { todos } = props;
  return (
    <Fragment>
      {todos.map((todo, i) => {
        return <TodoItem key={i} todo={todo} />;
      })}
    </Fragment>
  );
};

export default memo(Todos);
