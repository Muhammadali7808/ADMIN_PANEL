import { useMutation, useQueryClient } from '@tanstack/react-query'
import { request } from '../../../../config/request';

export const useEditCategory = (id: number) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData ) => request.put(`/category/${id}/`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['category'] });
    },
  });
};
