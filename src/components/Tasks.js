import { ReactSortable } from "react-sortablejs";
import { useMemo } from "react";
import { useStore } from "../hooks/useStore";

const Tasks = ({ id }) => {
  const lists = useStore(
    useMemo(() => (state) => state.lists.filter((q) => q.categoryId === id), [
      id,
    ])
  );
  const setLists = useStore((state) => state.setLists);

  return (
    <div id={id}>
      <ReactSortable
        list={lists}
        group="shared"
        setList={() => {}}
        onEnd={(e) => setLists(e.clone.id, "categoryId", e.to.parentElement.id)}
      >
        {lists.map((r) => (
          <div
            id={r.id}
            className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter"
            key={r.id}
          >
            <input
              value={r.name}
              className="focus:outline-none"
              contentEditable
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default Tasks;
