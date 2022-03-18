window.onload = function() {
    // document.getElementsByTagName("body")[0].style.height = document.body.scrollHeight+"px";
    // document.getElementsByTagName("body")[0].style.width  = document.body.scrollWidth+"px";


    var step = document.body.scrollWidth; //步距
    var banner = document.getElementById("banner");
    var img = document.getElementById("img")
    var circles = document.getElementById("circles").children;
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var index = 0;
    var len = circles.length;
    var run;

    function turn() {
        run = setInterval(function() {
            circles[index].removeAttribute("class");
            index++;
            move(index);
            console.log(index);
            if (index == len) {
                index = 0;
            }
            circles[index].className = "active";
            console.log("change" + index);
        }, 4000);
    }
    //启动时，调用函数
    turn();

    // 设置鼠标移入时暂停
    banner.onmouseenter = function() {
        //当鼠标移入容器中，停止轮播
        clearInterval(run);
    }
    banner.onmouseleave = function() {
            //当鼠标移出容器时，继续开始轮播
            turn();
        }
        // 设置鼠标移到圆点上时候的事件
    for (let i = 0; i < len; i++) {
        circles[i].onmouseenter = (function(i) {
            return function() {
                circles[index].removeAttribute("class");
                index = i;
                move(index);
                circles[index].className = "active";
                console.log("mouse circle change" + index);
            }
        })(i);
    }

    // 设置左箭头事件
    left.onclick = function() {
            circles[index].removeAttribute("class");
            index--;
            move(index);
            if (index < 0) {
                index = len - 1;
            }
            circles[index].className = "active";
            console.log("left change" + index);
        }
        // 设置右箭头事件
    right.onclick = function() {
        circles[index].removeAttribute("class");
        index++;
        move(index);
        if (index == len) {
            index = 0;
        }
        circles[index].className = "active";
        console.log("right change" + index);
    }

    function move(index) {
        img.style.transform = 'translate3d(' + (index + 1) * step + 'px,0px,0px)';
        img.style.transitionDuration = '0.3s';
        // 为了实现无限轮播的一些处理
        if (index < 0) {
            setTimeout(function() {
                img.style.transitionDuration = '0s';
                img.style.transform = 'translate3d(' + len * step + 'px,0px,0px)';
            }, 300);
        }
        if (index == len) {
            setTimeout(function() {
                img.style.transitionDuration = '0s';
                img.style.transform = 'translate3d(' + -700 + 'px,0px,0px)';
            }, 300);
        }
    }
}