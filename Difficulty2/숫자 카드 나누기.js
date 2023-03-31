function update1 (min, arr1, arr2){
    for (var i = min; i > 1; i--){
        var is_valid = true;
        
        if (min % i != 0) {
            continue;
        }
        
        for (var index2 in arr1){
            var value2 = arr1[index2];
            var value3 = arr2[index2];
            if (value2 % i != 0){
                is_valid = false;
                break;
            }
            if (value3 % i == 0) {
                is_valid = false;
                break;
            }
        }
        
        if (is_valid) {
            return i;
        }
    }
    return 0;
}



function solution(arrayA, arrayB) {
    arrayA = Array.from(new Set(arrayA)).sort(function(a,b) { return a - b; });
    arrayB = Array.from(new Set(arrayB)).sort(function(a,b) { return a - b; });
    
    var valA = update1(arrayA[0], arrayA, arrayB);
    var valB = update1(arrayB[0], arrayB, arrayA);
    
    return Math.max(valA, valB);
}

/* 복기
97.7점... 테스트 케이스 하나를 통과 못 했다. 이번에도 타임 오버다.
우선, Function.apply를 사용하는 것 보단 차라리 array를 sort해버리는 게 훨씬 빠르다.
그리고 배열에 중복이 있을 가능성이 있을 땐 꼭 중복을 제거해주도록 하자. Set을 활용하는 게 가장 빠른 듯 하다.
*/
