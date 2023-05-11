function clickBtn1() {
    const arr = [];
    const chk1 = document.form.check;

    for (let i = 0; i < chk1.length; i++) {
      if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
        arr.push(chk1[i].id);
        // arrにチェックが入った都道府県のidを代入
      }
    }
    document.getElementById("span1").textContent = arr;
    // span1にテキストデータ（arr）を表示
    p_id = arr.toString();
    // 配列だと文字列と連拳できないので変換
  }