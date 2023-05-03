function proverit(){
    let pr_otv_zadachi_1 = "Земля";
    let pr_otv_zadachi_2 = "Солнце";
    let pr_otv_zadachi_3 = "Марс";
    let pr_otv_zadachi_4 = "8";
    let pr_otv_zadachi_5 = "Меркурий";
    let pr_otv_zadachi_6 = "1";
    let pr_otv_zadachi_7 = "24";
    let otv_uch_1 = document.getElementById('z_1').value;
    let otv_uch_2 = document.getElementById('z_2').value;
    let otv_uch_3 = document.getElementById('z_3').value;
    let otv_uch_4 = document.getElementById('z_4').value;
    let otv_uch_5 = document.getElementById('z_5').value;
    let otv_uch_6 = document.getElementById('z_6').value;
    let otv_uch_7 = document.getElementById('z_7').value;
    let ball = 0;

    if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
        ball +=1;
    }
    if(otv_uch_4 == pr_otv_zadachi_4){
        ball +=1;
    }
    if(otv_uch_5 == pr_otv_zadachi_5){
        ball +=1;
    }
    if(otv_uch_6 == pr_otv_zadachi_6){
        ball +=1;
    }
    if(otv_uch_7 == pr_otv_zadachi_7){
        ball +=1;
    }
    let vsego_zadach = 7;
    let procent_vip = Math.round(ball/vsego_zadach * 100 * 100)/100;
    document.getElementById('rezultat').innerHTML = "Задания выполнены верно на "+procent_vip+"%.";
    }