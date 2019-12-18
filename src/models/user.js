// const sign = (data, uri) => {
//   return $.ajax({
//     url: '/api/users/' + uri,
//     type: 'post',
//     data,
//     success: (result) => {
//       return result
//     }
//   })
// }

// // const isSignin = (token) => {
// //   return $.ajax({
// //     url: '/api/users/issignin',
// //     type: 'post',
// //     headers: {
// //       'X-Access-Token': token
// //     },
// //     success(result) {
// //       return result
// //     }
// //   })
// // }
// const isSignin = (data) => {
//   return $.ajax({
//     // url: '/api/search_subjects',
//     url: '/mock/users/issignin.json',
//     type: 'get',
//     data,
//     success(result) {
//       return result
//     }
//   })
// }

// export default {
//   sign,
//   isSignin
// }
