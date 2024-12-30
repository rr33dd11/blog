import { Col, Row } from "antd";
import {CommunityCard} from "../components/CommunitiesPage/CommunityСard";
import {useCommunitiesPage} from "../hooks/useCommunitiesPage.ts";

export const CommunitiesPage = () => {

    const {communities} = useCommunitiesPage()

    return (
        <Row justify='center' gutter={[6, 6]}>
            {communities && communities.map((community) => (
                <Col xs={20} sm={20} md={20} lg={16} xl={16}><CommunityCard id={community.id} name={community.name}/></Col>
            ))}
        </Row>
    )
}