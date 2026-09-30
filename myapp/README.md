## Custom Hook to fetch API + PokeAPI in React JS

In this repository, I've just [copied everything from here](https://www.youtube.com/watch?v=5syO_mMoVwY&list=LL&index=3) and added it to this
<br>
Timestamp: 28th September 2026

### Update: 
- Installed a [TanStack Library](https://tanstack.com/query/latest/docs/framework/react/installation)<br>
  ``
  npm i @tanstack/react-query
  ``
- Configured the main.jsx file
  <br>

  ``
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
  ``
  

  ``
  const queryclient = new QueryClient()
  createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
  ``
<br>

Timestamp: 30th September 2026
