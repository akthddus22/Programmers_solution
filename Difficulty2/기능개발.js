function solution(progresses, speeds) {
    var answer = [];
    
    let prog_stack = progresses;
    let speed_stack = speeds;
    
    let last_date = 0;
    
    for (let i = 0; i < prog_stack.length; i++) {
        let date = Math.ceil((100 - prog_stack[i])/speed_stack[i]);
        console.log(date);
        
        if (answer.length == 0) {
            answer.push(1);
            last_date = date;
        } else if (date <= last_date) {
            let p = answer.pop();
            answer.push(p+1);
        } else {
            answer.push(1);
            last_date = date;
        }
    }
    
    return answer;
}

/* 복기
기본적인 스택-큐 문제.
Javascript는 배열에 대해 스택 관점의 접근과 큐 관점의 접근을 모두 제공한다.
하지만 스택 관점의 접근이 훨씬 빠른 시간복잡도를 가지고 있으니, reverse 함수를 통해 큐를 스택으로 만드는 것도 고려할만하다.
*/
