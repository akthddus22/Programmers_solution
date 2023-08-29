from queue import PriorityQueue

def solution(n, edge):
    
    que = PriorityQueue()
    que.put((0, 1)) 
    d = [20000] * (n+1)
    d[1] = 0
    
    graph = [[] for _ in range(n+1)]
    for vertex in edge:
        graph[vertex[0]].append(vertex[1])
        graph[vertex[1]].append(vertex[0])
    
    while (not que.empty()):
        s = que.get()[1]
        for e in graph[s]:
            if (d[e] > d[s]+1):
                d[e] = d[s]+1
                que.put((d[e], e))
        
    max_d = 0
    max_n = 0
    for distance in d:
        if (distance == 20000):
            continue
        if (distance > max_d):
            max_d = distance
            max_n = 1
        elif (distance == max_d):
            max_n += 1
    
    return max_n
