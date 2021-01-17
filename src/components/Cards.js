import { useStore } from "../hooks/useStore";
import Tasks from "./Tasks";

const Cards = () => {
  const categories = useStore((state) => state.categories);

  return (
    <div className="flex px-4 pb-8 items-start overflow-x-auto">
      {categories.map((q) => {
        return (
          <div
            className="rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3"
            key={q.id}
          >
            <div className="flex justify-between py-1">
              <h3 className="text-sm">{q.name}</h3>
              <svg
                className="h-4 fill-current text-grey-dark cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
              </svg>
            </div>
            <div className="text-sm mt-2">
              <Tasks id={q.id} />
              <p className="mt-3 text-grey-dark">Add a card...</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
