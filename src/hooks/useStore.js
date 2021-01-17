import create from "zustand";
import keyBy from "../utils/keyBy";

export const useStore = create((set) => ({
  categories: [
    {
      id: "cat1",
      name: "Category 1",
    },
    {
      id: "cat2",
      name: "Category 2",
    },
  ],
  lists: [
    {
      id: "listid1",
      name: "list name 1 ",
      categoryId: "cat1",
      rank: 1,
    },
    {
      id: "listid2",
      name: "list name 2",
      categoryId: "cat2",
      rank: 2,
    },
    {
      id: "listid3",
      name: "list name 3",
      categoryId: "cat2",
      rank: 3,
    },
  ],
  setLists: (id, key, value) =>
    set((state) => {
      const temp = keyBy(state.lists, "id");
      temp[id] = {
        ...temp[id],
        [key]: value,
      };

      return {
        ...state,
        lists: Object.values(temp),
      };
    }),
}));
