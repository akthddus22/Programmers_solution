function solution(participant, completion) {
    var answer = '';
    var hash = {};
    for (var index in participant) {
        var name = participant[index];
        if (hash[name] == undefined) {
            hash[name] = 1;
        }
        else {
            hash[name] = hash[name] + 1;
        }
    }
    for (var index in completion) {
        var name = completion[index];
        hash[name] = hash[name] - 1;
    }
    for (var name in hash) {
        if (hash[name] == 1) {
            return name;
        }
    }
    
    
    return answer;
}

/* 복기
마찬가지로 해시 문제다. for in 보다는 다른 구문을 쓰는 게 더 빨랐을까? 평범한 for 구문을 쓰는 게 더 빠르다고 하니 습관을 들이자.
그리고 루프를 돌릴 때 participant와 completion을 동시에 돌리는 게 나았을지도.
*/
