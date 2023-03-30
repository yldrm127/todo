import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { completedChange, destroy } from "./todoslice";
function todolist() {
  const itemSelector = useSelector((state) => state.todo.items);
  const active = useSelector((state) => state.todo.allactive);
  const todoDispacth = useDispatch();
  const completedDispacth = useDispatch();

  let filters = itemSelector;
  if (active === "all") {
    filters = itemSelector;
  }
  if (active === "active") {
    filters = filters.filter((index) => index.completed === true);
  }
  if (active === "completed") {
    filters = filters.filter((index) => index.completed === false);
  }

  return (
    <div className="todo-list">
      {filters.map((item, key) => (
        <div className="todo" key={key}>
          <input
            id="checkbox"
            type="checkbox"
            checked={item.completed ? false : true}
            onClick={() => completedDispacth(completedChange(item.id))}
          />
          <p className={item.completed ? "" : "line-through"}>{item.title} </p>
          <label onClick={() => todoDispacth(destroy(item.id))}>
            <IoMdClose className="close" />
          </label>
        </div>
      ))}
    </div>
  );
}
export default todolist;
