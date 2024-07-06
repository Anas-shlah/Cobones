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

  getFirstItemHome: async () => ([
    {
      title: 'FLASH SALE! Wild Wadi Waterpark Ticket',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl:
        'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
      price: 209,
    },
    {
      title: 'In turpis',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl:
        'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
      price: 209,
    },
    {
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl:
        'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
      price: 209,
    },
  ]),
};
