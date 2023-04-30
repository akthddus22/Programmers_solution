function solution(numbers, target) {
    var answer = 0;
    
    let stack = [{minus: 0, index: 0}];
    let numbers_sum = numbers.reduce((acc, cur) => acc+cur, 0);
    let minus_sum = (numbers_sum - target)/2;
    
    for (let i = 0; i < stack.length; i++) {
        let temp=stack[i].minus;
        let index=stack[i].index;
        if (temp == minus_sum) {
            answer += 1;
        } else if (index <= numbers.length) {
            stack.push({minus: temp+numbers[index], index: index+1});
            stack.push({minus: temp, index: index+1});
        }
    }
    
    return answer;
}

/* 복기
사용한 코드는 BFS에 속한다.
*/
