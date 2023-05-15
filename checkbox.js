function check_radiobtn() {
    let chk;
    const radio = document.form.check;

    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {//(chk1[i].checked === true)と同じ
        chk = radio[i].id;
        // arrにチェックが入った都道府県のidを代入
      }
    }
    document.getElementById("span1").textContent = chk;
    // span1にテキストデータ（chk）を表示
    p_id = chk;
    return p_id;
  }