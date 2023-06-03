function solution(numbers) {
    
    function check_prime(number) {
        if (number == 0) { return false; }
        if (number == 1) { return false; }
        if (number == 2) { return true; }
        
        let is_prime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                is_prime = false;
            }
        }
        return is_prime;
    }
    
    let answer = 0;
    let stack = [];
    for (let i = 0; i < numbers.length; i++) {
        stack.forEach(e => {
            for (let j = 0; j < e.length; j++) {
                stack.push(e.substr(0, j)+numbers[i]+e.substr(j));
            }
            stack.push(e+numbers[i]);
        });
        stack.push(numbers[i]);
    }
    
    let num_stack = [];
    stack.forEach(e => {
        num_stack.push(parseInt(e));
    });
    
    let set = new Set(num_stack);
    let final_stack = [...set];
    
    final_stack.forEach(e => {
        if (check_prime(e)) { answer += 1; }
    });
    
    
    return answer;
}
