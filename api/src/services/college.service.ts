import { DUMMY_DATA } from "../utils/data";

export const getCollegeList = () => {
  return DUMMY_DATA.map((clg) => ({ image: clg.image, title: clg.title }));
};

export const getCollegeDetails = (clgId: string) => {
  return new Promise((resolve, reject) => {
    const data = DUMMY_DATA.find((clg) => clg.title === clgId);
    if (data) resolve(data);
    else
      reject({ message: "Oops! College you are looking for it is not available at the moment." });
  });
};
