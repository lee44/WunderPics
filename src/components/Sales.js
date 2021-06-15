import React from "react";
import { useGlobalContext } from "../context/context";

const Sales = () => {
  const { loadData } = useGlobalContext();

  return (
    <div className="container">
      <h1 className="my-4">Sales Summary</h1>
      <div class="box">
        <h6>Total Sales</h6>
        <h1>${loadData.salesSummary.totalSales}</h1>
        <span>Updated {loadData.salesSummary.salesUpdated}</span>
      </div>
      <div class="box">
        <h6>Photos Sold</h6>
        <h1>{loadData.salesSummary.photosSold}</h1>
        <span>Updated {loadData.salesSummary.photosSoldUpdated}</span>
      </div>
    </div>
  );
};

export default Sales;
