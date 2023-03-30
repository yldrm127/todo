import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear, status } from "./todoslice";
function footer() {
  const itemLength = useSelector((state) => state.todo.items);
  const clerDispacth = useDispatch();
  const statusDispacth = useDispatch();
  return (
    <div className="footer">
      <span> {itemLength.length} items</span>
      <button onClick={() => statusDispacth(status("all"))}>all</button>
      <button onClick={() => statusDispacth(status("active"))}>active</button>
      <button onClick={() => statusDispacth(status("completed"))}>
        completed
      </button>
      <button onClick={() => clerDispacth(clear())}>clear completed</button>
    </div>
  );
}

export default footer;
