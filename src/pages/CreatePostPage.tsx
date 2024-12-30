import {Button, Card, Col, Form, Input, InputNumber, Row, Select, Typography} from "antd";
import {SelectGroup} from "../components/CreatePostPage/SelectGroup.tsx";
import {AddressSelect} from "../components/CreatePostPage/AddressSelect.tsx";
import {useState} from "react";
import {useCreatePostPage} from "../hooks/useCreatePostPage.ts";

export const CreatePostPage = () => {
    const [addressElements, setAddressElements] = useState<(number | undefined)[]>([undefined])
    const {form, Create, tags, tagsLoading, setSelectedAddressElements} = useCreatePostPage()

    return (
        <Row style={{marginTop: 30}} justify='center'>
            <Col xs={20} sm={20} md={20} lg={18} xl={16}>
                <Card title={(
                        <Typography.Title level={3} style={{margin: 0}}>Написать новый пост</Typography.Title>
                )}>
                    <Form form={form} layout='vertical' onFinish={Create} initialValues={{
                        group: localStorage.getItem('groupId') || "undefined",
                    }}>
                        <Row gutter={[12, 0]} style={{alignItems: 'center'}}>
                            <Col xs={24} sm={16} md={18} lg={18} xl={18}>
                                <Form.Item label='Название' name='title' rules={[{required: true, message: 'Введите название'}]}>
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={8} md={6} lg={6} xl={6}>
                                <Form.Item label='Время чтения' name='readingTime' rules={[{required: true, message: 'Введите время чтения'}]}>
                                    <InputNumber min={0} style={{width: '100%'}} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <SelectGroup/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Form.Item label='Тэги' name='tags' rules={[{required: true, message: 'Выберите тэг'}]}>
                                    <Select mode='multiple' loading={tagsLoading}>
                                        {tags && tags.map((tag) => (
                                            <Select.Option key={tag.id} value={tag.id}>{tag.name}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Form.Item label='Ссылка на картинку' name='image'>
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Form.Item label='Текст' name='description' rules={[{required: true, message: 'Введите текст'}]}>
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Row gutter={[24,24]}>

                                </Row>
                            </Col>
                            <Col span={24}>
                                <AddressSelect addressElements={addressElements} setAddressElements={setAddressElements}
                                               setSelectedElements={setSelectedAddressElements}/>
                            </Col>
                            <Col span={24}>
                                <Row justify='end'>
                                    <Col xs={24} sm={10} md={8} lg={6} xl={5} style={{marginRight:"left"}}>
                                        <Button type='primary' onClick={form.submit} block>Применить</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}