import { useRouter } from "next/router";
import SearchResult from "./page";

const SearchPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <SearchResult id={id} />
    </div>
  );
};

export default SearchPage;
