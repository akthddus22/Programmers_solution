function solution(name) {
    
    function distance(a) {
        let alpha = Math.abs(a.charCodeAt(0) - "A".charCodeAt(0));
        return Math.min(alpha, 26-alpha);
    }
    function pos_distance(a, b, max) {
        let alpha = Math.abs(b - a);
        return Math.min(alpha, max-alpha);
    }
    
    if (name.length == 1) {
        return distance(name);
    }
    
    let dist = 0;
    let pos_list = [];
    let pos = 0;
    let max = name.length;
    
    for (let i = 0; i < name.length; i++) {
        dist += distance(name[i]);
        if (name[i] != "A") {
            pos_list.push(i);
        }
    }
    
    if (pos_list.length == 0) { return 0; }
    
    let min_dist = [];
    min_dist.push(pos_list[pos_list.length-1]);
    min_dist.push(max-pos_list[0]);
    for (let i = 0; i < pos_list.length-1; i++) {
        let temp_dist = 2*pos_list[i] + (max - pos_list[i+1]);
        min_dist.push(temp_dist);
    }
    for (let i = pos_list.length-1; i >= 1; i--) {
        let temp_dist = 2*(max - pos_list[i]) + pos_list[i-1];
        min_dist.push(temp_dist);
    }
    dist += min_dist.sort(function(a,b) { return b - a; }).pop();
    return dist;
}

/*
탐욕법 기출문제에 있었던 문제지만, 어딜봐도 탐욕법 문제는 아니다.
*/
