import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);

    const [signUpResult, uploadResult] = await Promise.allSettled([signUpPromise, uploadPromise]);

    return [
      { status: signUpResult.status, value: signUpResult.value },
      { status: uploadResult.status, value: uploadResult.value }
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
}
