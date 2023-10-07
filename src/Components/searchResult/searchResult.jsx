import { useParams } from "react-router-dom";
import Sidebar from "./componet/sidebar";
import SearchResultHeader from "./componet/searchResultHeader";
import "./style/SearchResult.css";

function SearchResult() {
  const { searchKey } = useParams();

  return (
    <>
      <div className="SearchResult-container">
        <Sidebar />
        <SearchResultHeader query={searchKey} />
      </div>
    </>
  );
}

export default SearchResult;
