import React from "react";
import { useGlobalContext } from "../context/context";

function Orders() {
  const { loadData } = useGlobalContext();
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-9 col-7">
          <h1 className="my-4">Purchase Orders</h1>
        </div>
        <div className="col-lg-3 col-5">
          <select className="form-select" name="" id="" def>
            <option selected>Recent Orders</option>
            <option value="1">Orders Sent</option>
            <option value="2">Orders Refunded</option>
          </select>
        </div>
      </div>
      {loadData.orders.map((order) => {
        return (
          <div className="card">
            <div className="card-header text-lg-start text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2 col-6">
                    <h6>Order #:</h6>
                    <h6>{order.id}</h6>
                  </div>
                  <div className="col-lg-2 col-6">
                    <h6>Purchase Date:</h6>
                    <h6>{order.purchaseDate}</h6>
                  </div>
                  <div className="col-lg-2 col-6">
                    <h6># of Photos:</h6>
                    <h6>{order.numberOfPhotos}</h6>
                  </div>
                  <div className="col-lg-2 col-6">
                    <h6>Customer:</h6>
                    <h6>{order.customer}</h6>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="d-flex justify-content-lg-end justify-content-center align-items-center h-100">
                      <a href="#">View Invoice</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="container">
                {order.lineItems.map((item) => {
                  return (
                    <>
                      <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-12 mb-md-0 mb-3 text-center">
                          <img
                            className="order-image"
                            src={item.thumbnail_url}
                            alt={item.activityName}
                          />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-8 col-12">
                          <table>
                            <tr>
                              <th>Photo:</th>
                              <td>{item.name}</td>
                            </tr>
                            <tr>
                              <th>Location:</th>
                              <td>{item.locationName}</td>
                            </tr>
                            <tr>
                              <th>Date/Time:</th>
                              <td>
                                {item.photoDate} | {item.photoTime}
                              </td>
                            </tr>
                            <tr>
                              <th>Size:</th>
                              <td>
                                {item.width}x{item.height} | {item.size}
                              </td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>
                                <a href="#">Personal Use License</a>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="row mt-1 justify-content-end align-items-align-items-end">
                        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-8 text-end">
                          <div className="d-flex justify-content-end align-items-end h-100">
                            Profit:
                          </div>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4 text-end profit-price">
                          ${item.price}
                        </div>
                      </div>
                      <hr></hr>
                    </>
                  );
                })}
                <div className="row mt-1 justify-content-end align-items-align-items-end">
                  <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-8 text-end">
                    15% Commission:
                  </div>
                  <div className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4 text-end">
                    ${order.commission}
                  </div>
                </div>
                <div className="row mt-1 justify-content-end align-items-align-items-end">
                  <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-8 text-end">
                    <div className="d-flex justify-content-end align-items-end h-100">
                      Total Profit:
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4 text-end profit-price">
                    ${order.totalProfit}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
