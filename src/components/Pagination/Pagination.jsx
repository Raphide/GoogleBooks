import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";
import styles from "./Pagination.module.scss";

const Pagination = ({currentPage}) => {
  const { setPage } = useContext(ItemContext);
  const [pageCount, setPageCount] = useState(1)

  return (
    <nav className={styles.body} aria-label="Page navigation">
      <button className={styles.prev} onClick={()=> {setPage(currentPage - 20), setPageCount(pageCount - 1)}}>Prev</button>
      <span className={styles.count}>{pageCount}</span>
      <button className={styles.next} onClick={()=> {setPage(currentPage + 20), setPageCount(pageCount + 1)}}>Next</button>
    </nav>
  );
};

export default Pagination;
