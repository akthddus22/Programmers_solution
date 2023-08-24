def solution(targets):
    
    answer = 1
    
    targets.sort(key = lambda x: x[1])
    mis = targets[0][1]
    
    for target in targets:
        if (target[0] < mis):
            continue
        else:
            answer += 1
            mis = target[1]

    return answer
