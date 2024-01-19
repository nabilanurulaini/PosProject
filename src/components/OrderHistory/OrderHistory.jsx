import OrderItem from "./OrderItem";
import { useState } from "react";

function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orderHistory"));

  // eslint-disable-next-line no-unused-vars
  const [orderHistoryList, setOrderHistoryList] = useState(orders ?? []);
 
  return (
    <>
      {orderHistoryList.length > 0 ? (
        
        <div className="grid grid-cols-2 py-5 gap-5">
          {/* button hapus  per order item dan setelah klik hapus maka aka render ulang */}
           
          {/* <Button onClick={()=>{
            localStorage.clear();
            setOrderHistoryList([]);
          }} color="warning">Clear History</Button> */}
          {orderHistoryList.map((order) => (
            <div key={order.orderNumber}>
              <OrderItem order={order} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="mt-10 text-center text-3xl text-gray-400">
            No order has been made
          </h1>
        </div>
      )}
    </>
  );
}
export default OrderHistory;
