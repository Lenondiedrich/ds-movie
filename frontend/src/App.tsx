import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Listing } from "./pages/Listing/index";
import { Form } from "./pages/Form/index";
import { Navbar } from "./components/Navbar/index";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/form">
            <Route path=":movieId" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
