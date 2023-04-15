function solution(priorities, location) {
    var answer = 0;
    
    let new_prior = [];
    let prior_length = priorities.length;
    let rev_prior = priorities.reverse();
    
    let max_prior = [...priorities].sort((a,b) => {return b-a;});
    
    for (let i = 0; i < prior_length; i++) {
        new_prior.push({prior: rev_prior.pop(), index: i});
    }
    
    let now_prior = 0;
    
    while (true) {
        let shifted = new_prior.shift();
        if (shifted.prior == max_prior[now_prior]) {
            now_prior += 1;
            answer += 1;
            if (shifted.index == location) { return answer; }
        } else {
            new_prior.push(shifted);
        }
    }
    
    return answer;
}

/* 복기
배열에 Object를 넣는 문법은 정말 편리하다. 앞으로도 자주 사용해보자.
그리고, 배열을 복사할 때는 [...] 문법을 활용하도록 하자. 다차원 배열에는 사용할 수 없다는 점에 주의.
*/
