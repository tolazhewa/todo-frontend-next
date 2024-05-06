"use server";

import todoAPI from "./todoAPI";

const pingAPI = async (): Promise<boolean> => {
  try {
    const response = await todoAPI.get<void>("/ping/");
    return true;
  } catch (error) {
    console.error("Could not ping backend server", error);
    return false;
  }
};

export { pingAPI };
