import { Menu, Typography } from "antd";
import { GroupOutlined, LoginOutlined, PlusSquareOutlined, ProductOutlined, UsergroupDeleteOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { useHeader } from "../../hooks/useHeader.ts";

export const Header = () => {

    const {isAuth, logout, email, activeKey, setActiveKey } = useHeader();

    return (
        <Menu mode='horizontal' selectedKeys={[activeKey]} onClick={(e) => setActiveKey(e.key)} style={{marginBottom: 20}}>
            <Menu.Item key='logo' disabled style={{ cursor: 'default' }}>
                <Typography.Title level={5} style={{ marginTop: 7 }}>СТАРЫЙ БлОГ</Typography.Title>
            </Menu.Item>
            <Menu.Item key='main'>
                <Link to='/'><ProductOutlined /> Главная</Link>
            </Menu.Item>
            <Menu.Item key='authors'>
                <Link to='/authors'><UsergroupDeleteOutlined /> Авторы</Link>
            </Menu.Item>
            <Menu.Item key='communities'>
                <Link to='/communities'><GroupOutlined /> Группы</Link>
            </Menu.Item>

            {isAuth && (
                <>
                    <Menu.Item key='newPost'>
                        <Link to='/post/create'><PlusSquareOutlined /> Написать пост</Link>
                    </Menu.Item>
                    <Menu.SubMenu title={<><UserOutlined/>  {email}</>} style={{ marginLeft: 'auto' }}>
                        <Menu.Item key='profile'>
                           <Link to='/profile'>Профиль</Link>
                        </Menu.Item>
                        <Menu.Item onClick={() => logout()} key='logout'>Выход</Menu.Item>
                    </Menu.SubMenu>
                </>
            )}

            {!isAuth && (
                <Menu.Item key='login' style={{ marginLeft: 'auto' }}>
                    <Link to='/login'><LoginOutlined /> Войти</Link>
                </Menu.Item>
            )}
        </Menu>
    )
}