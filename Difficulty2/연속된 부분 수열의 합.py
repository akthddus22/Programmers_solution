def solution(sequence, k):
    D = [0] * len(sequence)
    
    D[0] = sequence[0]
    for i in range(1, len(D)):
        D[i] = D[i-1] + sequence[i]
    
    min_len = len(D)
    answers = []
    s_ind = 0
    for i in range(len(D)):
        for j in range(s_ind, len(D)):
            
            if (j-i >= min_len):
                s_ind = j-1
                break
            
            if (D[j]-D[i]+sequence[i] == k):
                s_ind = j+1
                answers.append([i, j])
                if (j-i < min_len):
                    min_len = j-i
                break
                
            if (D[j]-D[i]+sequence[i] > k):
                s_ind = j
                break
                    
    for e in answers:
        if (e[1]-e[0] == min_len):
            return e;
    
    return []
