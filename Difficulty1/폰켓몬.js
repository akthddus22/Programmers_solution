function solution(nums) {
    var answer = 0;
    
    var hash = {};
    for (var index in nums){
        var key = nums[index];
        hash[key] = 0;
    }
    
    return Math.min(nums.length/2, Object.keys(hash).length);
}

/* 복기
프로그래머스의 고득점 kit 중 해시 분야에 관련된 문제다. 해시에 집착해서 object로 유사 해시를 만들어서 풀었는데, set을 활용하는 게 훨씬 빨랐을지도.
arr에서 중복을 제거하려면 set을 활용하자.
*/
