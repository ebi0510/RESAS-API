function population_stat(){
    // index.htmlでonclick="dgp(check_radiobtn());"と書いた場合、function population_stat(data){}みたいに引数が使える
    var data = check_radiobtn();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'G5o0d05drMR4MXloFtNDv2u2eqE8oK2SX5SiNzXL'
        }
    };
    
    fetch('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='+data, options)
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        .catch(err => console.error(err));
}