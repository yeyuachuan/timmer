/**
 * Created by Administrator on 2017/8/10.
 */
function drawcircle(circle,x,y,r,num,posx,posy){
    var px_ = posx || 100;
    var py_ = posy || 20;

    for(var i = 0;i<num.length;i++){
        for(var j=0;j<num[i].length;j++){

            if(num[i][j] ==1 ){
                circle.push({
                    x:j*25+px_,
                    y:i*25+py_,
                    c:"red",
                    r:10,
                    a:3,
                    v:0,
                    vs:Math.pow(-1,Math.ceil(Math.random()*10))*2,
                    status:0
                })
            }
        }
    }
}

