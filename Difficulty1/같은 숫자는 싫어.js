function solution(arr)
{
    let stack = [];
    let before = -1;
    let popped = 0;
    while (arr.length != 0){
        popped = arr.pop();
        if (before != popped) {
            stack.push(popped);
        }
        before = popped;
    }
    return stack.reverse();
}

/* 복기
기본적인 스택 문제다. 문제 없이 전부 통과하긴 했지만, reverse를 쓰지 않고 queue 형식을 쓰는 게 더 빠를 지도?
*/
