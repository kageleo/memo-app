export default {
    apiResponse
};

async function apiResponse(url = '', token, crud = 'GET') {
    const response = await fetch(`https://challenge-server.tracks.run/memoapp${url}`, {
      method: crud,
      headers: {
        'Content-Type': 'application/json',
        'X-ACCESS-TOKEN': token
      }
    })
    .catch(() => { console.error('fetch error') });
    
    return response;
}



// function uuid() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
//       .split('')
//       .map(c => {
//         switch (c) {
//           case 'x' : return (Math.random() * 16 | 0).toString(16);
//           case 'y' : return ((Math.random() * 4 | 0) + 8).toString(16);
//           default: return c;
//         }
//       })
//       .join('');
// }