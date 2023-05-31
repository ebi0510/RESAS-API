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
        .then(response => {
            console.log(response);
            graph(response);
            // response.result.data[i]で、「総人口」「生産年齢人口」みたいに項目別データが見れる
            // response.result.data[1].data[1]で「総人口」の1980年の人口みたいに年代別データが見れる
        })
        .catch(err => console.error(err));
}

function graph(population_data){
    var ctx = document.getElementById("myChart").getContext('2d');
    var label_data = check_populationbtn();

    let years = [];
    for(let i = 0; i < population_data.result.data[label_data].data.length; i++){
        years.push(population_data.result.data[label_data].data[i].year);
        // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for
        // 追記する処理を書き足さないといけない
        // 入れ物を用意する。それに対して追記する処理をする（append的な）。配列？
    }
    console.log(years);

    let p_data = [];
    for(let i = 0; i < population_data.result.data[label_data].data.length; i++){
        p_data.push(population_data.result.data[label_data].data[i].value);
    }
    console.log(p_data);

    var myChart = new Chart(ctx, {
     type: 'line',
    // グラフタイプ
        data: {
            labels: years,
            // X軸
            datasets: [{
                label: population_data.result.data[label_data].label,
                // 凡例
                lineTension: 0,
                // 線の直線度合い。0だとまっすぐ。
                data: p_data,
                // グラフに表示する数値データ
                backgroundColor: [
                    // 棒の塗りつぶし色
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    // 棒の境界線の色
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        },
    });
    console.log(myChart);
}