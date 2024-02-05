// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { API_URL, API_DEV_URL, CMS_SERVER_URL } from '@/env';
// import { CommonRes } from '@/api/common/types';





// const options = {
//     method: 'GET',
//     url: 'https://api.upbit.com/v1/orders/chance',
//     headers: {accept: 'application/json'}
//   };




// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
//   'Cache-Control': 'no-cache',
//   Pragma: 'no-cache',
//   Expires: '0',
// };

// //Todo - env 파일 구분하여 cms 환경과 dev 환경에서 다른 url 호출 할 수 있도록 조정할 것
// const commonApi = axios.create({
//   baseURL: `${isDevMode() ? API_DEV_URL : API_URL}${CMS_SERVER_URL}`,
//   headers: DEFAULT_HEADERS,
// });

// commonApi.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     const accessToken = localStorage.getItem('accessToken');

//     config.headers = {
//       ...config.headers,
//       Authorization: accessToken ? `Bearer ${accessToken.replaceAll('"', '')}` : '',
//     };

//     return config;
//   },
//   (err) => Promise.reject(err),
// );

// commonApi.interceptors.response.use(
//   (res: AxiosResponse<CommonRes>) => ({ ...res.data }),
//   async (err) => {
//     const status = err.response.status;
//     const errCode = err.response.data.code;
//     const currRefToken = JSON.parse(localStorage.getItem('refreshToken') as string);

//     // 토큰 리프레시
//     if (status === 401 && errCode === 40100) {
//       const originalReq = err.config;
//       const res = (await commonApi.put(`/admin/refresh`, {
//         refreshToken: currRefToken,
//       })) as CommonRes;

//       if (res.code === 40101) {
//         localStorage.clear();
//         localStorage.setItem('accessToken', `""`);
//         location.href = window.location.origin;

//         return;
//       }

//       const { accessToken, refreshToken, email } = res.data;

//       if (res.code === 20000 || res.code === 20099) {
//         !!accessToken && localStorage.setItem('accessToken', `"${accessToken}"`);
//         !!refreshToken && localStorage.setItem('refreshToken', `"${refreshToken}"`);
//         !!email && localStorage.setItem('email', `"${email}"`);

//         originalReq.headers.Authorization = `Bearer ${accessToken}`; // 새 accessToken 으로 교체
//         // 토큰 갱신 후 재호출
//         return commonApi(originalReq);
//       }
//     }
//     return err.response.data; // code, reason 이 존재하는 에러정보 객체 반환 => mutation, setMsgOpen 에서 재사용
//   },
// );

// export default commonApi;
