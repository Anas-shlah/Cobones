// const axios = require("axios").default;

// const baseUrl = "https://url/api/";

// axios.interceptors.request.use(
//   (config) => {
//     console.log(config.url);
//     config.headers = {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "X-Requested-With": "XMLHttpRequest",
//       ...config.headers,
//     };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default {
  // signIn: async (username, password, fcmToken) => {
  //   const formData = new FormData();
  //   formData.append('phone_or_email', username);
  //   formData.append('password', password);
  //   if (fcmToken) formData.append('fcm_token', fcmToken);
  //   return await axios.post(`${baseUrl}login`, formData, {
  //     headers: {
  //       Authorization: 'Bearer 4|xY2opjKDQFHsGRK08n5u5cEMBe17sObauiepPpkH',
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  // },

  getUserJobRecommendations: async () => {
    // return await axios.get(`${baseUrl}jobs/user/job-recommendations`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
  },
};
