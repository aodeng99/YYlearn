$(document).ready(function() {
  $("#li1").click(function() { // 根据 id 拿到 dom节点  做 事件（点击事件） 干什么事情  下面
    $("#childUl1").stop().slideToggle(); //  取反  显示时 点击之后  隐藏  反之  显示
  });

  $("#li2").click(function() {
    $("#childUl2").stop().slideToggle();
  });
})
