const file = "#";

function get_y_list(wallpaper) {
    var temp_list = []
    for (var x_line in wallpaper) {
        
        var index = wallpaper[x_line].indexOf(file);
        var last_index = wallpaper[x_line].lastIndexOf(file);
        if (index !== -1) {
            temp_list.push(index);
        }
        if (last_index !== -1) {
            temp_list.push(last_index);
        }
    }
    return temp_list;
}

function get_x_list(wallpaper) {
    var temp_list = []
    var index = 0;
    for (var x_line in wallpaper) {
        if (wallpaper[x_line].includes(file)) {
            temp_list.push(index);
        }
        index += 1;
    }
    return temp_list;
}



function solution(wallpaper) {
    var answer = [];
    
    
    var x_list = get_x_list(wallpaper);
    var y_list = get_y_list(wallpaper);
    
    
    var lux = Math.min.apply(null, x_list);
    var rux = Math.max.apply(null, x_list)+1;
    var luy = Math.min.apply(null, y_list);
    var ruy = Math.max.apply(null, y_list)+1;
    
    answer.push(lux);
    answer.push(luy);
    answer.push(rux);
    answer.push(ruy);
    
    
    return answer;
}

/* 복기
Function.prototype.apply(null, array)를 기억하자. 함수의 인자를 array 형식으로 넣을 수 있게 해줌. null 자리에는 함수 내부에서 this로 호출하는 객체를 넣을 수 있다.
*/
