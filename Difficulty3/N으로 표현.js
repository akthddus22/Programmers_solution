function solution(N, number) {
    
    
    function compute_list(a, b) {
        let lst = [];
        for (let i = 0; i < a.length; i++) {
            b.forEach(function(elem) {
                lst.push(a[i]+elem);
                lst.push(a[i]-elem);
                lst.push(elem-a[i]);
                lst.push(elem*a[i]);
                lst.push(Math.floor(elem/a[i]));
                lst.push(Math.floor(a[i]/elem));
            });
        }
        return [...(new Set(lst.filter(elem => elem != 0)))];
    }
    
    let map = new Map([
        [1, []],
        [2, []],
        [3, []],
        [4, []],
        [5, []],
        [6, []],
        [7, []],
        [8, []],
    ]);
    let con = [0, N, N*11, N*111, N*1111, N*11111, N*111111, N*1111111, N*11111111];
    
    for (let i = 1; i <= 8; i++) {
        let lst = map.get(i);
        lst.push(con[i]);
        
        for (let j = 1; j <= i/2; j++) {
            let temp_lst1 = map.get(j);
            let temp_lst2 = map.get(i-j);
            lst = [...lst, ...(compute_list(temp_lst1, temp_lst2))];
        }
        map.set(i, lst);
        
        if (lst.includes(number)) { return i; }
    }
    
    
    return -1;
}
