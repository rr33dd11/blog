import {Form} from "antd";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginCredentials} from "../interfaces/IUSers/LoginCredentials.ts";
import {useMutation} from "react-query";
import {postLogin} from "../api/requests/Users/postLogin.ts";
import {login} from "../store/userSlice.ts";
import {isAxiosError} from "../api/axios/instance.ts";
import {getProfile} from "../api/requests/Users/getProfile.ts";

export const useLoginPage = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Login = () => {
        const loginCred: LoginCredentials = form.getFieldsValue();
        mutation.mutate(loginCred)
    }

    const mutation = useMutation({
        mutationFn: (loginCred: LoginCredentials) => postLogin({params: loginCred}),
        onSuccess: async (response) => {
            localStorage.setItem('token', response.data.token)
            const profileInfo = await getProfile().then((info) => info.data);
            dispatch(login(profileInfo))
            localStorage.setItem('email', profileInfo.email)
            localStorage.setItem('myId', profileInfo.id)
            navigate('/')
        },
        onError: (error) => {
            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    form.setFields([
                        {name: 'email', errors: ['']},
                        {name: 'password', errors: ['Неверный email или пароль']}
                    ])
                }
            }
        },

    })

    return {form, Login, mutation}
}