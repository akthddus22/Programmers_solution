from collections import deque

def solution(numbers):
    
    my_stack = deque()
    answer = [-1] * len(numbers)
    
    for i in range(0, len(numbers)):
        
        while my_stack:
            j = my_stack.pop()
            if (numbers[j] < numbers[i]):
                answer[j] = numbers[i]
            else:
                my_stack.append(j)
                break
        
        my_stack.append(i)
    
    return answer
