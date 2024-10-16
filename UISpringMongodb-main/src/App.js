import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, CreatePost } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer" >
          <Route path="/employer/createpost" element={<CreatePost />} />
        </Route>
        <Route path="/employee/feed" element={<Feed />} />
        {/* <Route path="ex/employee/feed" element={<Example />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
