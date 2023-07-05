function solution(cookie) {
    
    let left = [0];
    const len = cookie.length;
    for (let i = 0; i<len; i++) {
        let cook1 = cookie.pop();
        let cook2 = left.pop();
        left.push(cook2);
        left.push(cook1+cook2);
    }
    
    let whole_sum = left.pop();
    let right = [whole_sum];
    let max = 0;
    for (let i = 0; i<len; i++) {
        let m = left.pop();
        
        for (let j = 0; j<right.length; j++) {
            let r = right[j];
            
            if (r-m > whole_sum/2) { continue; }
            if (r-m <= max) { continue; }
            
            
            if (left.includes(2*m-r)) { 
                max = r-m;
                break;
            }
        }
        
        right.push(m);
    }
    
    
    
    return max;
}
