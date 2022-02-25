import { FC, Fragment, memo } from "react";
import { Todo as ITodo } from "../types";

type IProps = {
  todo: ITodo;
};

const Todo: FC<IProps> = ({ todo }) => {
  return (
    <Fragment>
      <li>{todo.text}</li>
    </Fragment>
  );
};

export default memo(Todo);
