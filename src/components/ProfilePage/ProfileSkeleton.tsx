import { Row, Skeleton } from "antd"

export const ProfileSkeleton = () => {
    return (
        <Row gutter={[12,12]} style={{marginBottom: 12}}>
            <Skeleton.Input active block size='large'/>
            <Skeleton.Input active block size='large'/>
            <Skeleton.Input active block size='large'/>
            <Skeleton.Input active block size='large'/>
            <Skeleton.Input active block size='large'/>
        </Row>
    )
}