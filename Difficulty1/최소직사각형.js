function solution(sizes) {
    let max_large = 0;
    let max_small = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let temp_max = Math.max(sizes[i][0], sizes[i][1]);
        let temp_small = Math.min(sizes[i][0], sizes[i][1]);
        if (temp_max >= max_large) { max_large = temp_max; }
        if (temp_small >= max_small) { max_small = temp_small; }
    }
    return max_large*max_small;
}
