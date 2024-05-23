// import { createRoot } from 'react-dom/client'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// import App from './components/App.tsx'

// const queryClient = new QueryClient()

// document.addEventListener('DOMContentLoaded', () => {
//   createRoot(document.getElementById('app') as HTMLElement).render(
//     <QueryClientProvider client={queryClient}>
//       <App />
//       <ReactQueryDevtools />
//     </QueryClientProvider>,
//   )
// })

import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import router from './route.tsx'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>,
  )
})
