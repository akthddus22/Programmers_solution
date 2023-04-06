function solution(clothes) {
    
    let hash = new Map();
    let lst = [];
    let answer = 1;
    
    for (var i = 0; i < clothes.length; i++) {
        let key = clothes[i][1];
        if (hash.get(key) == undefined) {
            hash.set(key, 1);
        } else {
            hash.set(key, hash.get(key)+1);
        }
    }
    
    for (key of hash.keys()) {
        lst.push(hash.get(key));
    }
    
    for (var i = 0; i < lst.length; i++) {
        answer = answer*(lst[i]+1);
    }
    
    
    return answer-1;
}

/* 복기
쉬운 해시 문제. 하지만 루프를 돌리는 방법에 대해서는 아직 개선의 여지가 있을 지도.
for in과 for of를 언제 사용하는지 구분하고, ||를 사용해서 같은 상황에서 if문을 없애보자.
*/
