import {Col, Row} from "antd";
import {FilterBlock} from "../components/MainPage/FilterBlock";
import {PostBlock} from "../components/CommunityPage/PostBlock.tsx";

export const MainPage = () => {
    return (
        <Row justify='center'>
            <Col xs={20} sm={20} md={18} lg={22} xl={16}>
                <FilterBlock/>
                <PostBlock/>
            </Col>
        </Row>
    )
}