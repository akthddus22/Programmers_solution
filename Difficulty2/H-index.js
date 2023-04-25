function solution(citations) {
    
    citations.sort((a,b) => { return b - a });
    let n = citations[0];
    let x = 0;
    for (let i = 0; i<citations.length; i++) {
        let temp = citations[i];
        if (temp >= n) { x += 1; }
        else {
            while (n > temp) {
                n -= 1;
                if (x >= n) { return n; }
            }
            x += 1;
        }
        if (x >= n) { return n; }
    }
    
    return Math.min(citations.length, citations.pop());
}

/* 복기
일단 간단한 정렬 문제긴 한데... 설명이 너무 이상해서 이해하는 데에 애를 먹었다.
이런 식으로 정렬 후 iter를 통해 답을 구할 때는, iter가 끝난 뒤에도 코드가 끝나지 않았을 떄의 end case를 잘 생각해보자. */
