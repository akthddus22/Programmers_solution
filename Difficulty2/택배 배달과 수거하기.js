function most_far_distance(deliveries, pickups) {
    var temp_distance = 0;
    deliveries.forEach((num, index) => {
        if (num !== 0 && (parseInt(index)+1) > temp_distance) {
            temp_distance = parseInt(index)+1;
        }
    });
    pickups.forEach((num, index) => {
        if (num !== 0 && parseInt(index)+1 > temp_distance) {
            temp_distance = parseInt(index)+1;
        }
    });
    return temp_distance;
}

function update_list(n, cap, lst) {
    var ability = cap;
    //var updated = lst;
    
    
    for (var index in lst) {
        index = n - index - 1;
        var temp_val = lst[index];
        lst[index] = Math.max(0, temp_val-ability);
        ability = Math.max(0, ability-temp_val);
        if (ability == 0) {
            break;
        }
    }
    
    return lst;
}


function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    var first_delivery = "";
    var first_pickups = "";
    
    
    for (var index in deliveries){
        if (deliveries[index] !== 0) {
            first_delivery = index;
            break;
        }
    }
    for (var index in pickups){
        if (pickups[index] !== 0) {
            first_pickups = index;
            break;
        }
    }
    
    
    while ((deliveries[first_delivery] !== 0)||(pickups[first_pickups] !== 0)) {
        answer += most_far_distance(deliveries, pickups)*2;
        deliveries = update_list(n, cap, deliveries);
        pickups = update_list(n, cap, pickups);
    }
    
    return answer;
}

/* 

*/
