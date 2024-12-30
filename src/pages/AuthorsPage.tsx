import {Col, Row} from "antd";
import {AuthorCard} from "../components/AuthorsPage/AuthorCard.tsx";
import {useAuthorsPage} from "../hooks/useAuthorsPage.ts";
import {AuthorsSkeleton} from "../components/AuthorsPage/AuthorSkeleton.tsx";

export const AuthorsPage = () => {

    const {authors, isLoading} = useAuthorsPage()

    return (
        <Row justify='center' gutter={[6, 6]}>
            {isLoading ? <AuthorsSkeleton/> : authors && authors.map((author) => (
                <Col span={20}><AuthorCard author={author}/></Col>
            ))}
        </Row>
    )
}