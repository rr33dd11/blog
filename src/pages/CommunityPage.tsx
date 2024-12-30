import {Col, Row, Typography} from "antd";
import {CommunityInfo} from "../components/CommunityPage/CommunityInfo.tsx";
import {FilterBlockCommunity} from '../components/CommunityPage/FilterBlockCommunity.tsx';
import { PostBlock } from '../components/CommunityPage/PostBlock.tsx';
import {useCommunityPage} from "../hooks/useCommunityPage.ts";
import {CommunityFullDTO} from "../interfaces/ICommunities/CommunityFulDTO.ts";
import {CommunityRole} from "../enums/CommunityRole.ts";
import {CommunityPageSkeleton} from "../components/CommunityPage/CommunityPageSkeleton.tsx";

export const CommunityPage = () => {

    const {isInfoLoading, isLoading, info, role, id} = useCommunityPage()

    return (
        <Row justify="center">
            <Col xs={20} sm={20} md={18} lg={22} xl={16}>
                {isLoading || isInfoLoading
                    ? <CommunityPageSkeleton/>
                    : (
                        <>
                            <CommunityInfo info={info as CommunityFullDTO } id={id as string} role={role as CommunityRole} />
                            {!role && info?.isClosed  ? (
                                    <Row justify='center' align='middle'>
                                        <Typography.Title level={4}>Для просмотра информации необходимо подписаться </Typography.Title>
                                    </Row>
                            ) : (
                                <>
                                    <FilterBlockCommunity/>
                                    <PostBlock id={id}/>
                                </>
                            )}
                        </>
                    )
                }
            </Col>
        </Row>
    );
};
