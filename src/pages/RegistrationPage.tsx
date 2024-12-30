import {Form, Row, Col, Card, Typography, Input, Button, Select, DatePicker } from "antd";
import Password from "antd/es/input/Password";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {useRegistrationPage} from "../hooks/useRegistrationPage.ts";

dayjs.locale('ru');

export const RegistrationPage = () => {
    const {form, Register, mutation} = useRegistrationPage()

    return (
        <Row style={{ marginTop: 30 }} justify='center'>
            <Col xs={20} sm={20} md={16} lg={12} xl={10} >
                <Card title={(
                    <Row justify='center' >
                        <Typography.Title level={3} style={{ margin: 0 }}>Регистрация</Typography.Title>
                    </Row>)}>
                    <Form form={form} layout='vertical' onFinish={Register}>
                        <Form.Item label='ФИО' name='fullName' rules={[{ required: true, message: 'Введите имя' }]}>
                            <Input placeholder="Иванов Иван Иванович"/>
                        </Form.Item>
                        <Form.Item label='Дата рождения' name='birthDate'>
                            <DatePicker style={{width: '100%'}} format='DD.MM.YYYY' placeholder="дд.мм.гггг"/>
                        </Form.Item>
                        <Form.Item label='Пол' name='gender' rules={[{ required: true, message: 'Выберите пол' }]}>
                            <Select onChange={(value) => {form.setFieldValue('gender', value)}}>
                                <Select.Option value='Male'>Мужчина</Select.Option>
                                <Select.Option value='Female'>Женщина</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label='Телефон' name='phone' rules={[{pattern: /^(\+7|8)\d{10}$/, message: 'Введите телефон в формате +7XXXXXXXXXX или 8XXXXXXXXXX'}]}>
                            <Input placeholder="+7 (XXX) XXX-XX-XX "/>
                        </Form.Item>
                        <Form.Item tooltip='Email будет использоваться для входа в систему' label='Email' name='email' rules={[{required: true, message: 'Введите email'}, {type: 'email', message: 'Неверный формат email'}]}>
                            <Input placeholder="name@example.com"/>
                        </Form.Item>
                        <Form.Item label='Пароль' name='password' rules={[
                            { required: true, message: 'Введите пароль' },
                            { min: 6, message: 'Минимальная длина - 6 символов' },
                            { pattern: /\d/, message: 'Пароль должен содержать хотя бы одну цифру' }]}>
                            <Password />
                        </Form.Item>
                    </Form>
                    <Button loading={mutation.isLoading} type='primary' block onClick={form.submit}>Зарегистрироваться</Button>
                    <Row justify='center' style={{ marginTop: 10 }}><Typography.Text>
                        <Link to='/login'>Уже есть аккаунт? Авторизуйтесь!</Link>
                    </Typography.Text></Row>
                </Card>
            </Col>
        </Row>
    )
}