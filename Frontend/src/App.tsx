import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Removed router imports as they're no longer needed
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
   
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }} className="rounded-2xl">
      <img 
        src="/images/comingsoon.jpg" 
        alt="Coming Soon" 
        style={{
          maxWidth: '100%',
          maxHeight: '80vh',
          objectFit: 'contain'
        }}
      />
      <h1 style={{ marginTop: '20px' }}>Our Website is Coming Soon</h1>
     
    </div>
  </QueryClientProvider>
);

export default App;



// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
  
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
   
//   </QueryClientProvider>
// );

// export default App;
