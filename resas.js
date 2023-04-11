var data = document.getElementById("resas_data");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'G5o0d05drMR4MXloFtNDv2u2eqE8oK2SX5SiNzXL'
    }
  };

  fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', options)
    .then(response => response.json())
    .then(main => {
        for(i = 0; i < main.result.length; i++){
        data.innerHTML += `<p><input type="checkbox">${main.result[i].prefName}</p>`
    }
    })
    .catch(err => console.error(err));