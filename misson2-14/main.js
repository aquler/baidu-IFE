window.onload = function() {
    var oUl = document.getElementById('aqi-list');

    var aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 90],
        ["西安", 100],
        ["长沙", 67],
        ["南宁", 75]
    ];

    function arrange(a,b){
        return b[1]-a[1];
    }

    aqiData.sort(arrange);  //数组从大到小排序

    var str = '';   //存放新创建出来的li中的内容
    var num = 0;    //存放名次

    for(var i=0; i<aqiData.length; i++){
        if(aqiData[i][1] >= 60){
            var aLi = document.createElement('li'); //创建新li

            str = '第'+ (++num)+'名：'+aqiData[i][0]+aqiData[i][1];
            aLi.innerHTML = str;
            oUl.appendChild(aLi);   //把li放到ul里面
            str = '';
        }
    }
}
