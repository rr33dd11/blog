import {Pagination, Row} from "antd"
import { IPagination } from "../../interfaces/ICommon/IPagination"
import {usePaginationBlock} from "../../hooks/usePaginationBlock.ts";

interface PaginationProps {
    pagination: IPagination
}

export const PaginationBlock = ({pagination} : PaginationProps) => {
    const {size, count, current} = pagination
    const {handlePageChange} = usePaginationBlock()

    return (
        <Row>
            <Pagination
                current={current}
                pageSize={size}
                total={size * count}
                onChange={handlePageChange}
                showSizeChanger={false}
                style={{marginBottom: 20}}/>
        </Row>
    )
}