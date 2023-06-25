def solution(phone_book):
    answer = True
    
    dict1 = {}
    for num in phone_book:
        elem = dict1.get(len(num), [])
        elem.append(num)
        dict1[len(num)] = elem
        
    
    for length, nums in dict1.items():
        if (answer == False):
            break

        for length2, nums2 in dict1.items():
            if (length2 <= length):
                continue
                
            sliced = list(map(lambda x: x[0:length], nums2))
            inter = list(set(nums)&set(sliced))
            if not (len(inter) == 0):
                answer = False
                break
            
    
    return answer
