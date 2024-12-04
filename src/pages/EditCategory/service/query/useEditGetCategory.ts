import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"


export const useGetEditCategory = (id: number) => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => request.get(`/category/${id}/`).then((res) => res.data)
    })
}
