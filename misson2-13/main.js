window.onload = function() {
    var oTxt = document.getElementById('txt');
    var oBtn = document.getElementById('btn');
    var oSp = document.getElementById('sp');

    oBtn.onclick = function() {
        if(oTxt.value){
            oSp.innerHTML = oTxt.value;
        }
        else{
            oSp.innerHTML = "请输入空气质量。"
        }
    }
};