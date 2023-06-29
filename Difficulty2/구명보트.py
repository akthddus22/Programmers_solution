def solution(people, limit):
    
    people.sort(key = lambda x: -x)
    i = 0
    j = len(people)-1
    temp = 0
    
    while 1:
        temp = people[i]
        
        while 1:
            if (i==j):
                return i+1
        
            if (temp+people[j] <= limit):
                temp = temp+people[j]
                j = j-1
                continue
                
            else:
                break
        
        i = i+1
        if (i==j):
            return i+1
            
    
    
    return i+1
