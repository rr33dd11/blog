import {useLocation, useNavigate} from "react-router-dom";

export const usePaginationBlock = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handlePageChange = (page: number) => {
        const search = new URLSearchParams(location.search)
        search.set('page', page.toString())
        navigate(`${location.pathname}?${search.toString()}`)
    }

    return {handlePageChange}
}