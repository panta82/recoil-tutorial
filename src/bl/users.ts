import { atom, selector } from "recoil";
import { randomInt, wait } from "./tools";

interface IUser {
  id: number;
  name: string;
}

const USERS: IUser[] = [
  { id: 1, name: "Axe" },
  { id: 2, name: "Barry" },
  { id: 3, name: "Cindy" },
];

const userDb = {
  async getUser(id: number): Promise<IUser> {
    console.log(randomInt(100, 500));
    await wait(randomInt(100, 500));
    console.log("dome wait");

    const user = USERS.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User not found: ${id}`);
    }

    return user;
  },
};

export const selectedUserIdState = atom({
  key: "selectedUserIdState",
  default: 0,
});

export const selectedUserQuery = selector({
  key: "selectedUserQuery",
  get: async ({ get }) => {
    const selectedId = get(selectedUserIdState);
    if (!selectedId) {
      return null;
    }

    return userDb.getUser(selectedId);
  },
});
