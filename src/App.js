import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./components/Home.js";
import {ShoppingProvider} from "./context/ProductContext";


function App() {
  return (
    <ShoppingProvider>
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Welcome to Shopping Page</h1>
        <BrowserRouter>
          <Routes>
            {/* <Header/> */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/posts" element={<Posts />} /> */}
            {/* <Route path="/posts/:postId" element={<PostDetails />} /> */}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ShoppingProvider>
  );
}

export default App;
