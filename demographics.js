const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'G5o0d05drMR4MXloFtNDv2u2eqE8oK2SX5SiNzXL'
    }
  };
  
  fetch('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=11362&prefCode=11', options)
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.error(err));