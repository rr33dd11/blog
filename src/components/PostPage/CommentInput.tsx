import {Button, Form, Input, Row} from "antd";
import {useForm} from "antd/es/form/Form";
import {useMutation, useQueryClient} from "react-query";
import {postComment} from "../../api/requests/Comment/postComment.ts";

interface CommentInputProps {
    postId: string
}

export const CommentInput = ({postId} : CommentInputProps) => {
    const [form] = useForm();
    const queryClient = useQueryClient();

    const sendComment =  useMutation(() =>
        postComment({params: {content: form.getFieldValue('content'), id: postId}}), {
        onSuccess: () => {
            queryClient.invalidateQueries(['post', postId])
            form.resetFields()
        }})

    return (
        <Form form={form} layout="vertical">
            <Form.Item name="content" label="Оставьте комментарий"
                rules={[{required: true, message: "Введите комментарий", }]}
            >
                <Input.TextArea rows={5}/>
            </Form.Item>
            <Form.Item>
                <Row justify="end">
                    <Button type="primary" onClick={() => sendComment.mutate()}>
                        Отправить
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
};