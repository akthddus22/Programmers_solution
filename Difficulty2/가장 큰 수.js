function solution(numbers) {
    var answer = '';
    var lst = [];
    
    numbers.forEach((n) => {
        lst.push(String(n));
    });
    
    lst.sort((a,b) => {
        return parseInt(b+a) - parseInt(a+b);
    });
    
    lst.forEach((s) => {
        answer = answer+s;
    });
    
    while((answer.charAt(0) == "0")&&(answer.length != 1)) {
        answer = answer.substr(1);
    }
    
    
    return answer;
}

/* 복기
꽤 기분 좋게 풀린 문제. 그런데 마지막에 0을 빼주는 부분을 생각해내지 못해서 꽤 오래걸렸다.
이번 문제에서 기억할 점은 javascript의 string 비교 매커니즘.
*/
