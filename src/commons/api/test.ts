


// import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://api.upbit.com/v1/accounts',
//   headers: {accept: 'application/json'}
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });





// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
//   'Cache-Control': 'no-cache',
//   Pragma: 'no-cache',
//   Expires: '0',
// };

// const createCommonApi = (): AxiosInstance => {
//   const baseURL = 'https://api.upbit.com/v1/'
//   const commonApiConfig: AxiosRequestConfig = {
//     baseURL: `${baseURL}`,
//     headers: {accept: 'application/json'},
//   };
//   return axios.create(commonApiConfig);
// };

// const commonApi = createCommonApi();

// // 주문 UUID를 통해 해당 주문에 대한 취소 접수를 한다.
// export const deleteOrders= async (params:any)=>
//   await commonApi.delete('/order', { data: params });

// // 주문 리스트를 조회한다.
// export const getOrders = async (params:any)=>
//   await commonApi.get('/order', { params });





// export const getPolygonExchangeRate = async () => {
  
//   try {
//     const response = await axios.get(
//       'https://api.upbit.com/v1/ticker?markets=KRW-MATIC',
//     );
//     return response.data[0].trade_price;
//   } catch (error) {
//     console.error('Error fetching Polygon exchange rate:', error);
//     return false;
//   }
// };

