function clickBtn1() {
    const arr = [];
    const chk1 = document.form.check;

    for (let i = 0; i < chk1.length; i++) {
      if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
        arr.push(chk1[i].id);
      }
    }
    document.getElementById("span1").textContent = arr;
  }