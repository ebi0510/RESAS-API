function get_prfecture_id() {
    let chk;
    const radio = document.form.check;
    // これってなんのためにあるの？
    // チェックが入ってるラジオボタンのデータを格納する

    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {//(chk1[i].checked === true)と同じ
        chk = radio[i].id;
        // chkにチェックが入った都道府県のidを代入
        document.getElementById("prefecture").textContent = radio[i].value;
      }
    }

    p_id = chk;
    console.log(p_id);
    return p_id;
  }

  function get_population_id() {
    let chp;
    const btn = document.btn1.check;
    // これってなんのためにあるの？
    // チェックが入ってるラジオボタンのデータを格納する

    for (let i = 0; i < btn.length; i++) {
      if (btn[i].checked) {//(chk1[i].checked === true)と同じ
        chp = btn[i].id;
        document.getElementById("data_type").textContent = btn[i].value;
        // chkにチェックが入った都道府県のidを代入
      }
    }

    chp_id = chp;
    console.log(chp_id);
    return chp_id;
  }