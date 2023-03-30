function parsing_days(date) {
    var year = parseInt(date.substr(2, 2));
    var month = parseInt(date.substr(5, 2));
    var day = parseInt(date.substr(8, 2));
    
    return year*336 + (month-1)*28 + day;
}

function how_many_days(date, today) {
    return parsing_days(today) - parsing_days(date);
}

function valid_day(terms, privacy) {
    var specific_term = privacy.substr(11, 1);
    for (var index in terms) {
        var index_term = terms[index].substr(0, 1);
        if (index_term == specific_term) {
            var valid_month = parseInt(terms[index].substr(2));
            return valid_month*28;
        }
    }
    return 0;
}

function is_invalid(today, terms, privacy) {
    
    var date = privacy.substr(0,10);
    
    var limit = valid_day(terms, privacy);
    var now = how_many_days(date, today);
    console.log(limit, now);
    
    return now >= limit;
}


function solution(today, terms, privacies) {
    var answer = [];
    
    for (var index in privacies) {
        var privacy = privacies[index];
        if (is_invalid(today, terms, privacy)) {
            var invalid_privacy_index = parseInt(index)+1;
            answer.push(invalid_privacy_index);
        }
    }
    return answer;
}

/* 복기
Date 자료형이 있다는 걸 잊지 말자. 괜히 복잡하게 풀었어...
배열에 대해 루프를 돌릴 때는 foreach를 적극적으로 활용해보자!
*/
