import College from "../models/college.model";

export const getCollegeList = () => {
  return new Promise(async (resolve, reject) => {
    const data = await College.find({}, { title: 1, image: 1, short_description: 1 });
    if (data) resolve(data);
    else reject({ message: "Oops! College data is not available." });
  });
};

export const getCollegeDetailsById = (clgId: string) => {
  return new Promise(async (resolve, reject) => {
    const data = await College.findOne({ _id: clgId });
    if (data) resolve(data);
    else
      reject({
        message: "Oops! College you are looking for it is not available at the moment.",
      });
  });
};

export const getCollegeDetailsByTitle = (title: string) => {
  return new Promise(async (resolve, reject) => {
    const data = await College.find({ title: title });
    resolve(data);
  });
};

// To insert all dummy data in mongodb
// Uncomment below code and run the server once. *don't forgot to comment again
// (function () {
//   College.insertMany(DUMMY_DATA);
// })();
