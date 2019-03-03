$(document).ready(function () {
    $("#li1").click(function () { // 根据 id 拿到 dom节点  做 事件（点击事件） 干什么事情  下面
        $("#childUl1").stop().slideToggle(); //  取反  显示时 点击之后  隐藏  反之  显示
    });

    $("#li2").click(function () {
        $("#childUl2").stop().slideToggle();
    });


    var picList = $("#picList >li");
    var pointList = $("#pointList>li");
    var low = 0; //  设置全局变量  为 轮播图 的  绝对定位 做准备

    function autoPlay() { //   自动 轮播  方法/函数
        low = low - 1047; // 将  low  的 值   每次  减少  1047  注：1047为一张图片的宽度
        $(".picList").stop().animate({ //  拿到所有的 class 为  .picList 的  节点  先执行  停止动画  重置  动画队列  否则 动画会有冲突 按照队列执行 再执行动画 
            "left": low + "px" //  将  low  变量的值  动态 赋值给  css left  注：.picList  为绝对定位 相对于 lunboComponent
        });
        if (low == -4188) { //  边界值 检测  当  Low 为 -4188 时  为 五张图片总长度  执行函数体语句
            return low = 1047; //  将  low 赋值为 1047  结果为 0 为第一张图片位置 
        }
    };

    var timer = setInterval(function () { // 将计时器 赋值并声明  给 timer  为下面做准备
        autoPlay() //  设置计时器   每 2000 毫秒  执行  autoPlay 方法
    }, 2000);

    $(".picList").mouseover(function () {
        clearInterval(timer); // 鼠标进入  .picList 盒子时  执行  清除计时器  timer  停止动画
    });

    $(".picList").mouseout(function () { //  鼠标离开  .picList 盒子时
        clearInterval(timer); // 清除  计时器  timer  防止 计时器累加  导致 计时器 变化过快
        timer = setInterval(function () { // 重新 执行  计时器  每 2000 毫秒  执行  autoPlay 方法
            autoPlay()
        }, 2000);
    });
});