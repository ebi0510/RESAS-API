function check_radiobtn() {
    let chk;
    const radio = document.form.check;
    // これってなんのためにあるの？
    // チェックが入ってるラジオボタンのデータを格納する

    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {//(chk1[i].checked === true)と同じ
        chk = radio[i].id;
        // chkにチェックが入った都道府県のidを代入
      }
    }
    document.getElementById("span1").textContent = chk;
    // span1にテキストデータ（chk）を表示
    p_id = chk;
    console.log(p_id);
    return p_id;
  }

  function check_populationbtn() {
    let chp;
    const btn = document.btn1.check;
    // これってなんのためにあるの？
    // チェックが入ってるラジオボタンのデータを格納する

    for (let i = 0; i < btn.length; i++) {
      if (btn[i].checked) {//(chk1[i].checked === true)と同じ
        chp = btn[i].id;
        // chkにチェックが入った都道府県のidを代入
      }
    }
    document.getElementById("span2").textContent = chp;

    chp_id = chp;
    console.log(chp_id);
    return chp_id;
  }