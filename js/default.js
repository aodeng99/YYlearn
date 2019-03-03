$(document).ready(function () {
    var lis = $("li");
    var list = $("#sortList > li"); // 拿到  一级 li 
    var childUl = $("#sortList > li >ul"); // 拿到  一级 li  下的 ul
    var childList = $("#sortList > li >ul > li");

    for (var i = 0; i < lis.length; i++) { // 循环遍历 
        $(list[i]).attr("id", "li" + i); // 动态添加 属性  key：id  value： 名称  + 循环 i 变量
        $(childUl[i]).attr("id", "childUl" + i); // 同上
        $(childList[i]).attr("id", "childList" + i); // 同上
    }
});








var string = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/* 
   循环遍历之后，删除 需要删除的 数据  
*  如果单纯使用 for循环 遍历数据 效率会很低 （顺序查找）
*   当数据量较大时 会使查询 时间 增大
*    
*   下列算法使用  二分排序 + 递归 ，大O 计法  log2（n）
*
* 使用方式
*   var result = removeAdata(string, "a", 0, string.length);
*   string.splice(result, 1);
*/
function removeAdata(stringArr, queryString, low, high) {
    var mid = Math.floor((high - low) / 2 + low);
    if (queryString < stringArr[mid]) {
        return removeAdata(stringArr, queryString, low, mid - 1);
    } else if (queryString > stringArr[mid]) {
        return removeAdata(stringArr, queryString, mid + 1, high);
    } else {
        return mid;
    }
}
