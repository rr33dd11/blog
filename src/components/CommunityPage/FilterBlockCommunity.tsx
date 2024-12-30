import {Button, Card, Col, Form, InputNumber, Row, Select, Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import {useForm} from "antd/es/form/Form";
import {getTag} from "../../api/requests/Tag/getTag";
import {getFiltersFromSearch} from "../../helpers/getFiltersFromSearch";
import {IPostFilters} from "../../interfaces/other/IPostFilters";
import {useQuery} from "react-query";
import {toSearchParams} from "../../helpers/mappers/toSearchParams";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react"


export const FilterBlockCommunity = () => {
    const [form] = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        form.setFieldsValue(getFiltersFromSearch(location.search));
    }, [location.search]);

    const fetchTags = () =>
        getTag().then((response) => response.data);

    const {isLoading, data: tags} = useQuery(['tags'], fetchTags, {
        refetchOnWindowFocus: false,
    })

    const setParams = (values: IPostFilters) => {
        navigate(`${location.pathname}?${toSearchParams(values).toString()}`)
    }


    return (
        <Card title={<>Фильтры  {isLoading ? (<Spin indicator={<LoadingOutlined spin />} />) : null}</>}>
            <Form form={form} layout='vertical' onFinish={setParams}>
                <Row gutter={[12, 0]} style={{alignItems: 'center'}}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item label='Сортировать' name='sorting'>
                            <Select defaultValue='CreateDesc'>
                                <Select.Option value='CreateDesc'>По дате создания (сначала новые)</Select.Option>
                                <Select.Option value='CreateAsc'>По дате создания (сначала старые)</Select.Option>
                                <Select.Option value='LikeDesc'>По количеству лайков (по убыванию)</Select.Option>
                                <Select.Option value='LikeAsc'>По количеству лайков (по возрастанию)</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item label='Поиск по тегам' name='tags'>
                            <Select mode='multiple' loading={isLoading}>
                                {tags && tags.map((tag) => (
                                    <Select.Option key={tag.id} value={tag.id}>{tag.name}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Row justify='space-between' align="middle">
                            <Col xs={24} sm={24} md={24} lg={8} xl={6}>
                                <Form.Item label='Количество постов на странице' name='size'>
                                    <InputNumber min={1} style={{width: '100%'}}/>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={5} style={{marginRight:"left"}}>
                                <Button type='primary' onClick={form.submit} block>Применить</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}