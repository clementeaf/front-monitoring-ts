import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";

/**
 * Query client instance with default options.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5
    }
  }
});

/**
 * Main component for the application.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
