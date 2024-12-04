import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
import { categoryType } from "./categoryType"


export const useGetProducts = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => request.get<categoryType>('/category/').then((res) => res.data)
    })
}
