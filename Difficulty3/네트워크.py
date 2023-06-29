def solution(n, computers):
    
    def find_network(index, computer, computers, network):
        network.append(index)
        
        for i in range(len(computer)):
            if (computer[i] == 1) and not (i in network):
                network = find_network(i, computers[i], computers, network)
                
        return network
    
    visited = []
    networks = []
    for i in range(len(computers)):
        if i in visited:
            continue
            
        network = find_network(i, computers[i], computers, [])
        networks.append(network)
        visited = list(set(visited)|set(network))
        

    return len(networks)
