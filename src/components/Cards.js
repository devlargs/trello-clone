const obj = [
  {
    name: "Category 1",
    data: [
      {
        name: "list 1",
        rank: 1,
      },
      {
        name: "list 2",
        rank: 2,
      },
      {
        name: "list 3",
        rank: 3,
      },
    ],
  },
  {
    name: "Category 2",
    data: [
      {
        name: "nice 1",
        rank: 1,
      },
      {
        name: "nice 2",
        rank: 2,
      },
      {
        name: "nice 3",
        rank: 3,
      },
    ],
  },
];

const Cards = () => {
  return (
    <div className="flex px-4 pb-8 items-start overflow-x-auto">
      {obj.map((q) => {
        return (
          <div className="rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3">
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
              {q?.data.map((r) => (
                <>
                  <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                    {r.name}
                  </div>
                </>
              ))}
              <p className="mt-3 text-grey-dark">Add a card...</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
