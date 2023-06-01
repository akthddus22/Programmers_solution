function solution(answers) {
    
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let first_right = 0;
    let second_right = 0;
    let third_right = 0;
    for (let i = 0; i<answers.length; i++) {
        let first_answer = first[i % first.length];
        let second_answer = second[i % second.length];
        let third_answer = third[i % third.length];
        
        
        let answer = answers[i];
        
        if (first_answer == answer) { first_right += 1; }
        if (second_answer == answer) { second_right += 1; }
        if (third_answer == answer) { third_right += 1; }
    }
    
    let max_score = Math.max(first_right, second_right, third_right);
    let ret = [];
    
    if (first_right == max_score) { ret.push(1); }
    if (second_right == max_score) { ret.push(2); }
    if (third_right == max_score) { ret.push(3); }
    
    return ret;
}
