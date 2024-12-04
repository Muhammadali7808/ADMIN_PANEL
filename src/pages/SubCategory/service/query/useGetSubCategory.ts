import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
import { categoryType } from "../../../CategoryList/service/query/categoryType"


export const useGetSubCategory = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => request.get<categoryType>('/api/subcategory/').then((res) => res.data)
    })
}
