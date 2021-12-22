import axios from "axios";
import { useMutation } from "react-query";

const SIGN_IN_ENDPOINT = "http://localhost:4000/user/signin";
const SIGN_UP_ENDPOINT = "http://localhost:4000/user/signup";

const useSignIn = () => {
  const mutationResult = useMutation(async (data) => {
    const response = await axios.post(SIGN_IN_ENDPOINT, { ...data });

    return response.data;
  });

  return mutationResult;
};

const useSignUp = () => {
  const mutationResult = useMutation(async (data) => {
    const response = await axios.post(SIGN_UP_ENDPOINT, { ...data });

    return response.data;
  });

  return mutationResult;
};

export { useSignIn, useSignUp };
