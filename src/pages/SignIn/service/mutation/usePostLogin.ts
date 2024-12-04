import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { loginType } from "./LoginType";

interface tokenType {
  token: string;
}

export const usePostLogin = () => {
  return useMutation({
    mutationFn: (data: loginType) =>
      request
        .post<tokenType>("/api/admin-login/", data)
        .then((res) => res.data),
  });
};
