import React from "react";
import styles from "./Series.module.scss";
import { selectAllSeries } from "../../../application/redux/filmSlice";
import { useSelector } from "react-redux";
import { Pagination } from "../../components/Pagination/Pagination";

export const Series = () => {
  const series = useSelector(selectAllSeries);
  return (
    <div className={styles.Series}>
      <Pagination allFilms={series} title="Series" />
    </div>
  );
};
