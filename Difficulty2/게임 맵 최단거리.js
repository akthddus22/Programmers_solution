function solution(maps) {
    let x = 0;
    let y = 0;
    
    let m = maps.length-1;
    let n = maps[0].length-1;
    
    let route = [];
    let traveled = [];
    route.push({x_axis:x,y_axis:y,len:0});
    
    while (true) {
        
        if (route.length == 0) {
            return -1;
        }
        
        let tuple = route.shift();
        let x_axis = tuple.x_axis;
        let y_axis = tuple.y_axis;
        let len = tuple.len;
        
        if (x_axis == n && y_axis == m) {
            return len+1;
        }
        
        if(traveled.includes(JSON.stringify({x_axis:x_axis, y_axis:y_axis}))){
            continue;
        }
        
        traveled.push(JSON.stringify({x_axis:x_axis, y_axis:y_axis}));
        
        if (x_axis > 0 && maps[y_axis][x_axis-1] == 1) {
            route.push({x_axis:x_axis-1, y_axis:y_axis, len:len+1});
        }
        if (x_axis < n && maps[y_axis][x_axis+1] == 1){
            route.push({x_axis:x_axis+1, y_axis:y_axis, len:len+1});
        }
        if (y_axis > 0 && maps[y_axis-1][x_axis] == 1) {
            route.push({x_axis:x_axis, y_axis:y_axis-1, len:len+1});
        }
        if (y_axis < m && maps[y_axis+1][x_axis] == 1) {
            route.push({x_axis:x_axis, y_axis:y_axis+1, len:len+1});
        }
    }
    
    
    return answer;
}
