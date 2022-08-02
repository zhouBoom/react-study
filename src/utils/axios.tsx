import Axios, { AxiosRequestConfig } from 'axios'
import axiosRetry from 'axios-retry' // axios失败重试
import { Notify } from 'zent'

const client = Axios.create({
    // 你的配置
    baseURL: 'https://mock.apifox.cn/m1/1386033-0-default', // 设置统一的请求前缀
    timeout: 10000 // 设置统一的超时时长
})
  
// 安装 retry 插件
// 当请求失败后，自动重新请求，只有3次失败后才真正失败
axiosRetry(client, { retries: 3 })

// 请求拦截
client.interceptors.request.use(config => {
    // 最简单的方案
    // config.url = config.url.replace('{version}', 'v1')
    return config
})

client.interceptors.response.use((res) => {
    if (res.data.code === 200) {
        return res.data
    } else {
        Notify.warn('接口请求异常')
        return Promise.reject(res.data)
    }
})

export async function request(url: string, config?: AxiosRequestConfig) {
    const response = await client.request({ url, ...config })
    const result = response.data
    // 你的业务判断逻辑
    return result
}
  
export default client