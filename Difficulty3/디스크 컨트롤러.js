function solution(jobs) {
    let t = 0;
    let time_table = 0;
    let len = jobs.length;
    while (true) {
        if (jobs.length == 0) {break;}
        
        
        let min_start = 1000;
        let min_task_time = 1000;
        let is_available = false;
        let chosen_task = 0;
        
        jobs.forEach(function(task, index) {
            if (task[0] <= min_start) { min_start = task[0]; }
            if (task[0] <= t) {
                is_available = true;
                if (task[1] <= min_task_time) {
                    min_task_time = task[1];
                    chosen_task = index;
                }
            }
        });
        
        if (is_available) {
            t += min_task_time;
            let elem = jobs.splice(chosen_task, 1)[0];
            time_table += t - elem[0];
        } else {
            t = min_start;
        }
    }
    return Math.floor(time_table/len)
}

/*
사견으로, 기본 지식이 없으면 풀기 어려운 문제가 아니었나 싶다.
디스크 컨트롤러의 경우 추후 어떤 task가 들어올지 모르기 때문에 현재 가지고 있는 task 중 가장 짧은 시간을 가진 task를 먼저 처리하지만,
이것이 항상 가장 빠르다고 볼 순 없기 때문이다.
*/
