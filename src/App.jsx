// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
function isCycle(V, adj) {
    // Create an array to keep track of visited nodes
    const visited = new Array(V).fill(false);
    // Loop through all nodes and check for cycles
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (dfs(i, -1, visited, adj)) {
                return 1;
            }
        }
    }
    return 0;
}

function dfs(node, parent, visited, adj) {
    // Mark the current node as visited
    visited[node] = true;
    // Loop through all adjacent nodes
    for (let i = 0; i < adj[node].length; i++) {
        const adjNode = adj[node][i];
        // If the adjacent node is not visited, recursively call dfs on it
        if (!visited[adjNode]) {
            if (dfs(adjNode, node, visited, adj)) {
                return true;
            }
        }
        // If the adjacent node is already visited and is not the parent of the current node, then a cycle is present
        else if (adjNode !== parent) {
            return true;
        }
    }
    return false;
}

// Driver code
const V = 5;
const adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
console.log(isCycle(V, adj)); // Output: 1
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
