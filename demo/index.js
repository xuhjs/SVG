// 获取进度条
let progressDom = document.querySelector('.progress')
//获取文本对象
let textDom = document.querySelector('.text')

function rotateCircle(persent){
// 获取svg圆形环的总长度，通过获取半径获取
var circleLength = Math.floor(2 * Math.PI * parseFloat(progressDom.getAttribute("r")))
// 按照百分比 计算出进度环的长度
var value  = persent * circleLength/100
//红色rgb = RGB,255,0,0
// 蓝色 rgb = 0,191,255
var red = 255+parseInt((0-255)/100*persent);
var green = 0+parseInt((191-0)/100*persent)
var blue = 0+parseInt((255-0)/100*persent)
// 设置stroke-dasharray和路径的颜色
progressDom.setAttribute('stroke-dasharray',value+",10000")
progressDom.setAttribute('stroke',`rgb(${red},${green},${blue})`)

//设置文本内容和颜色
textDom.innerHTML = persent +"%"
textDom.setAttribute("fill",`rgb(${red},${green},${blue})`)
}


//30毫秒变化将进度+1
let num= 0
setInterval(()=>{
    num++;
    if(num>100){
        num=0
    }
    rotateCircle(num)
},30)