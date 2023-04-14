function solution(genres, plays) {
    
    let hash = new Map();
    let sum = new Map();
    let answer = [];
    
    for (let i = 0; i < genres.length; i++) {
        sum.set(genres[i], plays[i]+(sum.get(genres[i])||0));
    }
    
    let sum_array = Array.from(sum);
    sum_array.sort((a,b) => { return b[1] - a[1]; });
    
    for (let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        let play = plays[i];
        
        if (hash.get(genre+"1") == undefined) {
            hash.set(genre+"1", {play: play, index: i});
        } else if (hash.get(genre+"1").play < play) {
            hash.set(genre+"2", hash.get(genre+"1"));
            hash.set(genre+"1", {play: play, index: i});
        } else if (hash.get(genre+"2") == undefined ) {
            hash.set(genre+"2", {play: play, index: i});
        } else if (hash.get(genre+"2").play < play) {
            hash.set(genre+"2", {play: play, index: i});
        }
    }
    
    for (let i = 0; i < sum_array.length; i++) {
        answer.push(hash.get(sum_array[i][0]+"1").index);
        
        if (hash.get(sum_array[i][0]+"2") !== undefined) {
        answer.push(hash.get(sum_array[i][0]+"2").index);
        }
    }
    
    
    return answer;
}

/* 복기
처음으로 풀어본 난이도 3 문제. 이제 해시 개념에는 좀 익숙해진 듯 하다.
*/
