import {Form} from "antd";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {login} from "../store/userSlice.ts";
import {isAxiosError} from "../api/axios/instance.ts";
import {UserRegisterModel} from "../interfaces/IUSers/UserRegisterModel.ts";
import {postRegister} from "../api/requests/Users/postRegister.ts";

export const useRegistrationPage = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Register = () => {
        const registerModel: UserRegisterModel = form.getFieldsValue();
        mutation.mutate(registerModel)
    }

    const mutation = useMutation({
        mutationFn: (registerModel: UserRegisterModel) => postRegister({params: registerModel}),
        onSuccess: (response) => {
            dispatch(login(form.getFieldValue('email')))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('email', form.getFieldValue('email'))
            navigate('/')
        },
        onError: (error) => {
            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    form.setFields([
                        {name: 'email', errors: ['Данный email уже используется в системе']},
                    ])
                }
            }
        },

    })

    return {form, Register, mutation}
}