window.onload = function(){
    var oUl1 = document.getElementById('source');
    var aLi = oUl1.getElementsByTagName('li');
    var oUl2 = document.getElementById('resort');
    var oBtn = document.getElementById('sort-btn');
    var rank = ['一','二','三','四','五','六','七','八','九','十'];//存放名次

    //取得li内容并转换成二维数组
    function getData(){
        var str = '';
        var data = [];
        for(var i=0; i<aLi.length; i++){
            str += aLi[i].innerText;
            data[i] = [str.split('空气质量：')[0],str.split('空气质量：')[1]];    //字符串切割得到的是数组
            str = '';
        }

        return data;
    }

    //数组排序
    function sortAqiData(data){
        data.sort(function(a,b){
            return a[1]-b[1];
        });

        return data;
    }

    //将数组的内容转换成li的内容并插入到ul
    function render(data){
        oUl2.innerHTML = ""; //设置为空，再次点击按钮的时候会先把以前的li清空

        for(var i=0; i<data.length; i++){
            var liNode = document.createElement('li');
            liNode.innerHTML = '第'+rank[i]+'名：'+data[i][0]+'空气质量：<b>'+data[i][1]+'</b>';
            oUl2.appendChild(liNode);
        }
    }

    function btnHandle(){
        var aqiData = getData();
        aqiData = sortAqiData(aqiData);
        render(aqiData);
    }

    function init() {
        oBtn.onclick = btnHandle;
    }

    init();
}
