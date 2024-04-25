import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResult, userResult] = await Promise.allSettled([photoPromise, userPromise]);

    if (photoResult.status === 'fulfilled' && userResult.status === 'fulfilled') {
      return {
        photo: photoResult.value,
        user: userResult.value
      };
    } else {
      return {
        photo: null,
        user: null
      };
    }
  } catch (error) {
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
