import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup(uploadPhoto, createUser) {
  createUser.then(data1 => {
    uploadPhoto.then(data2 => {
      console.log(daata2.body, data1.firstName, data1.lastName);
    })
    .catch(err => {
      console.error("Signup system offline");
    });
  })
  .catch(err => {
    console.error("Signup system offline");
  });
};
