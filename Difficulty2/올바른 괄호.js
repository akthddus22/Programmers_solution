function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    let stack = s.replace('()', '').split('').reverse();
    let n = 0;
    
    
    while (stack.length != 0) {
        let str = stack.pop();
        if (str == '(') {
            n = n+1;
        } else {
            n = n-1;
        }
        if (n==-1) { return false; }
    }
    return (n==0);
}

/* 복기
마찬가지로 쉬운 스택/큐 문제. 꽤 깔끔하게 푼 것 같은데..
replace 코드를 넣기 전에는 시간 제한이 걸렸었다.
*/
