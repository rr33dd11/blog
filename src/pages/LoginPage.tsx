import {Button, Card, Col, Form, Input, Row, Typography} from "antd";
import Password from "antd/es/input/Password";
import {Link} from "react-router-dom";
import {useLoginPage} from "../hooks/useLoginPage.ts";

export const LoginPage = () => {

    const {form, Login, mutation} = useLoginPage()

    return (
        <Row style={{marginTop: 30}} justify='center'>
            <Col xs={20} sm={20} md={16} lg={12} xl={10}>
                <Card title={(
                    <Row justify='center'>
                        <Typography.Title level={3} style={{margin: 0}}>Авторизация</Typography.Title>
                    </Row>)}>
                    <Form form={form} layout='vertical' onFinish={Login}>
                        <Form.Item label='Email' name='email' rules={[{required: true, message: 'Введите email'}]}>
                            <Input disabled={mutation.isLoading}/>
                        </Form.Item>
                        <Form.Item label='Пароль' name='password' rules={[{required: true, message: 'Введите пароль'}]}>
                            <Password disabled={mutation.isLoading}/>
                        </Form.Item>
                        <Button type='primary' block loading={mutation.isLoading} onClick={form.submit}>Войти</Button>
                    </Form>
                    <Row justify='center' style={{marginTop: 10}}><Typography.Text>
                        <Link to='/registration'>Нет аккаунта? Зарегистрируйтесь!</Link>
                    </Typography.Text></Row>
                </Card>
            </Col>
        </Row>
    )
}