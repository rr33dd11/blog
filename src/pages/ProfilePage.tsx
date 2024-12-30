import {Form, Row, Col, Card, Typography, Input, Button, Select, DatePicker} from "antd";
import {useForm} from "antd/es/form/Form";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import {useQuery, useMutation} from "react-query";
import {getProfile} from "../api/requests/Users/getProfile";
import {putProfile} from "../api/requests/Users/putProfile";
import {UserEditModel} from "../interfaces/IUSers/UserEditModel";
import axios from "axios";
import {ProfileSkeleton} from "../components/ProfilePage/ProfileSkeleton.tsx";

dayjs.locale("ru");

export const ProfilePage = () => {
    const [form] = useForm();

    const fetchProfile = () =>
        getProfile().then((response) => response.data);

    const updateProfile = () => {
        const newProfileData: UserEditModel = form.getFieldsValue();
        mutation.mutate(newProfileData)
    }

    const {isLoading} = useQuery(['profile'], fetchProfile, {
        refetchOnWindowFocus: false,
        onSuccess: (data) =>  form.setFieldsValue({
            ...data,
            birthDate: data.birthDate ? dayjs(data.birthDate) : null
        })
    })

    const mutation = useMutation({
        mutationFn: (profileData: UserEditModel) => putProfile({params: profileData}),
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                if (error.status == 400) {
                    form.setFields([{name: "email", errors: ["Уже зарегистрирован аккаунт с таким email"]}]);
                }
            }
        }

    })

    return (
        <Row style={{marginTop: 30}} justify="center">
            <Col xs={20} sm={20} md={16} lg={12} xl={10}>
                <Card title={
                        <Row justify="center">
                            <Typography.Title level={3} style={{margin: 0}}>Ваш профиль</Typography.Title>
                        </Row>
                    }
                >
                    <Form form={form} layout="vertical" onFinish={updateProfile}>
                        {isLoading ? (
                            <ProfileSkeleton/>
                        ) : (
                            <>
                                <Form.Item label="Email" name="email" rules={[
                                        { required: true, message: "Введите email"},
                                        { type: "email", message: "Неверный формат email"},
                                    ]}
                                >
                                    <Input readOnly placeholder="name@example.com"/>
                                </Form.Item>
                                <Form.Item
                                    label="ФИО"
                                    name="fullName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Введите имя",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Иванов Иван Иванович"/>
                                </Form.Item>
                                <Form.Item
                                    label="Телефон"
                                    name="phoneNumber"
                                    rules={[
                                        {
                                            pattern: /^(\+7|8)\d{10}$/,
                                            message:
                                                "Введите телефон в формате +7XXXXXXXXXX или 8XXXXXXXXXX",
                                        },
                                    ]}
                                >
                                    <Input placeholder="+7 (XXX) XXX-XX-XX "/>
                                </Form.Item>
                                <Form.Item label="Пол" name="gender">
                                    <Select defaultValue="Male">
                                        <Select.Option value="Male">
                                            Мужчина
                                        </Select.Option>
                                        <Select.Option value="Female">
                                            Женщина
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Дата рождения"
                                    name="birthDate"
                                >
                                    <DatePicker
                                        style={{width: "100%"}}
                                        format="DD.MM.YYYY"
                                        placeholder="дд.мм.гггг"
                                    />
                                </Form.Item>
                            </>
                        )}
                        <Button
                            loading={mutation.isLoading}
                            onClick={form.submit}
                            disabled={mutation.isLoading}
                            type="primary"
                            block
                        >
                            {mutation.isLoading ? "Сохранение..." : "Сохранить"}
                        </Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};