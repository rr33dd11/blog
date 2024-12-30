import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {router} from './routing/router'
import {Provider} from 'react-redux'
import {store} from './store/store'
import {ConfigProvider} from 'antd'
import ruRU from 'antd/locale/ru_RU'
import {QueryClientProvider} from "react-query";
import {queryClient} from "./query/queryClient.ts";

createRoot(document.getElementById('root')!).render(
    <ConfigProvider locale={ruRU}>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </Provider>
    </ConfigProvider>
)
