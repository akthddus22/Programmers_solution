def solution(brown, yellow):
    
    def count_brown(size):
        
        if (size[1]==0):
            return size[0]
        return (size[0]+size[1]-2)*2
    
    def sound_tuples(num):
        
        tuples = []
        for i in range(1, num):
            if (i*i > num):
                break
            
            if (num % i == 0):
                tuples.append((num/i, i))
                
        return tuples
    
    nums = brown+yellow
    tuples = sound_tuples(nums)
    
    
    for tup in tuples:
        if (count_brown(tup) == brown):
            return [tup[0], tup[1]]
        
    
    
    return [0,0]
