function arr(np_id){
    // np_idなのになんでp_idのデータ使えてるの？
        const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        'X-API-KEY': 'G5o0d05drMR4MXloFtNDv2u2eqE8oK2SX5SiNzXL'
        }
    };
    
    fetch('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='+p_id, options)
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        .catch(err => console.error(err));
        console.log('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='+p_id)
}