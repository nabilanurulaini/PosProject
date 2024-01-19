/* eslint-disable react/prop-types */
import { Accordion } from "flowbite-react";


function OrderItem({ order }) {
  return (
    <>
    
    <Accordion>
    
      <Accordion.Panel>
      <Accordion.Title style={{ fontWeight: "bold" }}>Order #{order.orderNumber}</Accordion.Title>

        <Accordion.Content>
          <ul>
            {order.items.map((orderItem) => (
              <li className="flex justify-between" key={orderItem.name}>
                <p>
                  {orderItem.quantity}x {orderItem.name} 
                </p>
                <p>{orderItem.notes}</p>
                <p>{orderItem.price.toLocaleString("id")}</p>
              </li>
            ))}
          </ul>

          <div className="divide-y">
            <div className="py-3">
              <div className="flex justify-between">
                <p>Total Price</p>
                <p>Rp {order.totalPrice.toLocaleString("id")}</p>
                {/* <p>{order.totalPrice.toLocaleString("id")}</p> */}
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p>Rp {order.tax.toLocaleString("id")}</p>
              </div>
              <div className="flex justify-between">
                <p>Service Charge</p>
                <p>Rp {order.serviceCharge.toLocaleString("id")}</p>
              </div>
            </div>

            <div className="flex justify-between py-3 font-semibold">
              <p>Grand Total</p>
              <p>Rp {order.grandTotal.toLocaleString("id")}</p>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
  );
}

export default OrderItem;
