import {getAuthors} from "../api/requests/Author/getAuthors.ts";
import {useQuery} from "react-query";

export const useAuthorsPage = () => {
    const fetchAuthors = () =>
        getAuthors().then((response) => response.data)

    const {data: authors, isLoading} = useQuery(['authors'], fetchAuthors, {
        refetchOnWindowFocus: false,
    });

    return {authors, isLoading};
}