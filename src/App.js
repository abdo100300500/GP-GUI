import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminGui from "./Components/admin/adminGui";
import UserGui from "./Components/user/userGui";
import SearchResult from "./Components/searchResult/searchResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserGui />} />
        <Route path="/admin" element={<AdminGui />} />
        <Route path="/user/search/:searchKey" element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;
