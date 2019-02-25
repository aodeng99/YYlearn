$(document).ready(function () {
    var list = $("#sortList > li"); // 拿到  一级 li 
    var childUl = $("#sortList > li>ul"); // 拿到  一级 li  下的 ul
    var childList = $("#sortList > li>ul>li");
    for (var i = 0; i < list.length; i++) { // 循环遍历 
        $(list[i]).attr("id", "li" + i); // 动态   添加 属性  key：id  value： 名称  + 循环 i 变量
        $(childUl[i]).attr("id", "childUl" + i); // 同上
        $(childList[i]).attr("id", "childList" + i); // 同上
    }

    $("#li1").click(function () { // 根据 id 拿到 dom节点  做 事件（点击事件） 干什么事情  下面
        $("#childUl1").stop().slideToggle(); //  取反  显示时 点击之后  隐藏  反之  显示
    });

    $("#li2").click(function () {
        $("#childUl2").stop().slideToggle();
    });
});