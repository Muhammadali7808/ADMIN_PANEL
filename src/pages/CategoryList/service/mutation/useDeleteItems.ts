import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDeleteItems = () => {
  const client = useQueryClient();
  return useMutation({
      mutationFn: (id: number) => request.delete(`/category/${id}/`).then((res) => res.data),
      
      onSuccess: () => client.invalidateQueries({queryKey: ['category']}),
  });
}