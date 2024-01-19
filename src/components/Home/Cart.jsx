/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button, Modal } from "flowbite-react";

function Cart({ carts, dispatch }) {
  const navigate = useNavigate();
  const initialOrderHistory = JSON.parse(localStorage.getItem("orderHistory"));
  const [orderHistory, setOrderHistory] = useState(initialOrderHistory || []);
  const totalPrice = carts.reduce((total, cart) => total + cart.totalPrice, 0);
  const tax = totalPrice * 0.1;
  const serviceCharge = totalPrice * 0.05;
  const grandTotal = totalPrice + tax + serviceCharge;
  const [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  function handleDeleteItem(id) {
    dispatch({
      type: "delete_cart_item",
      itemId: id,
    });
  }

  function handleIncreaseQuantity(cart) {
    dispatch({
      type: "increase_quantity",
      payload: cart,
    });
  }

  function handleDecreaseQuantity(cart) {
    dispatch({
      type: "decrease_quantity",
      payload: cart,
    });
  }
  function handleCloseModal() {
    setShowOrderSuccessModal(false);
    history.push('/order-history'); // Arahkan ke halaman OrderHistory setelah menutup modal
  }

  function placeOrder() {
    // Buat format tanggal dan waktu saat ini
    const now = moment().format("YYYYMMDD");
    // Tambahkan tiga digit angka random
    const randomNumbers = Math.floor(Math.random() * 1000) + 1;
    // Gabungkan tanggal, waktu, dan angka random
    const orderNumber = `${now}-${randomNumbers}`;
    // const [orderHistory, setOrderHistory] = useState([]);
    const orderItems = carts.filter((cart) => cart.quantity > 0);
    // alert("Pesanan Berhasil Disimpan - Order Number : " + orderNumber);

    const order = {
      orderNumber,
      totalPrice,
      serviceCharge,
      tax,
      grandTotal: totalPrice + tax + serviceCharge,
      items: orderItems.map((cart) => {
        return {
          name: cart.name,
          notes: cart.notes,
          quantity: cart.quantity,
          price: cart.totalPrice,
          serviceCharge: cart.serviceCharge,
          grandTotal: cart.grandTotal,
        };
      }),
    };
    setOrderNumber(orderNumber);
    setOrderHistory((prevOrderHistory) => [...prevOrderHistory, order]);
    setShowOrderSuccessModal(true);
    return dispatch({
      type: "checkout_item",
    });
  }

  useEffect(() => {
    if(orderHistory.length > 0) {
      console.log(orderHistory);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
     
    }
  }, [orderHistory]); // Jalankan efek hanya ketika orderHistory berubah

  // useEffect(() => {
  //   // Ambil order history dari local storage
  //   const orderHistoryFromLocalStorage = localStorage.getItem("orderHistory");
  //   if (orderHistoryFromLocalStorage) {
  //     const parsedOrderHistory = JSON.parse(orderHistoryFromLocalStorage);
  //     setOrderHistory(parsedOrderHistory);
  //     console.log(orderHistory);
  //   }
  // }, []); // Jalankan efek hanya sekali setelah komponen dirender

  return (
    <div className="bg-[#f5f4ed] w-[20%] rounded-lg shadow-md border py-5">
      <h1 className="text-center font-bold text-2xl text-yellow-500">Cart</h1>

      <div className="flex flex-col justify-between h-[800px]">
        <ul className="overflow-y-auto px-5">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="bg-white flex p-3 justify-between rounded-lg my-5"
            >
              <CartItem
                name={cart.name}
                image={cart.image}
                price={cart.totalPrice}
                notes={cart.notes}
              />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button
                    disabled={cart.quantity <= 1}
                    onClick={() => handleDecreaseQuantity(cart)}
                    color="warning"
                    className="w-[30px] h-[30px]"
                  >
                    -
                  </Button>
                  <span>{cart.quantity}</span>
                  <Button
                    onClick={() => handleIncreaseQuantity(cart)}
                    color="warning"
                    className="w-[30px] h-[30px]"
                  >
                    +
                  </Button>
                </div>

                <Button
                  className="w-full h-[30px]"
                  onClick={() => handleDeleteItem(cart.id)}
                  color="failure"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </ul>

        <div className="space-y-5 px-5">
          <div className="divide-y">
            <div className="py-3">
              <div className="flex justify-between">
                <p>Total Price</p>
                <p>Rp {totalPrice.toLocaleString("id")}</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p>Rp {tax.toLocaleString("id")}</p>
              </div>
              <div className="flex justify-between">
                <p>Service Charge</p>
                <p>Rp {serviceCharge.toLocaleString("id")}</p>
              </div>
            </div>

            <div className="flex justify-between py-3 font-semibold">
              <p>Grand Total</p>
              <p>Rp {grandTotal.toLocaleString("id")}</p>
            </div>
          </div>
       
          {/* jika isi cart==0 button place order akan ke disabled */}
          <Button className="w-full"
            color="warning"
            disabled={carts.length === 0}
            onClick={() => placeOrder()}
            >Place Order</Button>

         {/* <Button className="w-full"
            color="warning"
            onClick={() => placeOrder()}
            >Place Order</Button> */}

          <Modal show={showOrderSuccessModal} onClose={() => 
            handleCloseModal()
          }>
            <Modal.Header>Order Success</Modal.Header>
            <Modal.Body>
              <p>Order successfully ordered - Order Number: {orderNumber}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button color="warning" onClick={() => navigate("/order-history")}
              >Close</Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
    </div>
  );
}

export default Cart;
