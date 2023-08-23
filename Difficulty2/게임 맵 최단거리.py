from collections import deque

def solution(maps):
    
    visited = [[-1] * len(maps[0]) for _ in range(len(maps))]
    visited[0][0] = 1
    my_stack = deque()
    my_stack.append([0,0])
    goal_y = len(maps)-1
    goal_x = len(maps[0])-1
    answer = -1
    
  
    while (my_stack):
        cur = my_stack.pop()
        x = cur[1]
        y = cur[0]
        length = visited[y][x]+1
        
        
        temp = [[y-1, x], [y, x+1], [y, x-1], [y+1, x]]
        for n in temp:
            nx = n[1]
            ny = n[0]
            
            if (nx < 0 or ny < 0 or ny > goal_y or nx > goal_x):
                continue
            if ((goal_y - ny) + (goal_x - nx) + length >= answer and answer != -1):
                continue
                
            already = visited[ny][nx]
            
            if (maps[ny][nx] == 1 and (already == -1 or already > length)):
                if (ny == goal_y and nx == goal_x):
                    answer = length
                    
                
                else:
                    my_stack.append([ny, nx])
                    visited[ny][nx] = length
            
        
        
        
    
    return answer;
