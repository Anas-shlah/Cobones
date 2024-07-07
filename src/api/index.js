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
      images: ['https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65', 'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65', 'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',],
      options: [{ text: "1-Day General Admission for 1 person (1.1 meters and above) for Residents and Non-Residents", price: 209 }, { text: "1-Day General Admission for 1 person (1.1 meters and above) for Residents and Non-Residents", price: 209 }],
      directions: { value: '25.1398260, 55.1896910', title: 'Wild Wadi Waterpark', nameLocation: 'Jumeirah Road, Umm Suqeim 3' },
      video: 'https://cdn.cobone.com/141791/video.mp4',
    },
    {
      title: 'FLASH SALE! Wild Wadi Waterpark Ticket',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl:
        'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
      price: 209,
      images: ['https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65', 'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65', 'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',],
      options: [{ text: "1-Day General Admission for 1 person (1.1 meters and above) for Residents and Non-Residents", price: 209 }, { text: "1-Day General Admission for 1 person (1.1 meters and above) for Residents and Non-Residents", price: 209 }],
      directions: { value: '25.1398260, 55.1896910', title: 'Wild Wadi Waterpark', nameLocation: 'Jumeirah Road, Umm Suqeim 3' },
      video: 'https://cdn.cobone.com/141791/video.mp4',
    },
    {
      title: 'FLASH SALE! Wild Wadi Waterpark Ticket',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl:
        'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
      price: 209,
      images: ['https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65', 'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65', 'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',],
      options: [{ text: "1-Day General Admission for 1 person (1.1 meters and above) for Residents and Non-Residents", price: 209 }, { text: "1-Day General Admission for 1 person (1.1 meters and above) for Residents and Non-Residents", price: 209 }],
      directions: { value: '25.1398260, 55.1896910', title: 'Wild Wadi Waterpark', nameLocation: 'Jumeirah Road, Umm Suqeim 3' },
      video: 'https://cdn.cobone.com/141791/video.mp4',
    },
  ]),
};
