var data = document.getElementById("resas_data");

const options1 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'G5o0d05drMR4MXloFtNDv2u2eqE8oK2SX5SiNzXL'
    }
  };

  fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', options1)
    .then(response => response.json())
    .then(main => {
        for(i = 0; i < main.result.length; i++){
        resas_date.innerHTML += `<p><input type="checkbox" name="check" id="${main.result[i].prefCode}" value="${main.result[i].prefName}">${main.result[i].prefName}</p>`
        }
    })
    .catch(err => console.error(err));