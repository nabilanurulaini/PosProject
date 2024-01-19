/* eslint-disable react/prop-types */
function CartItem({ name, price, image, notes }) {
  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
      }}
    >
      <img src={image} style={{width:"75px", height:"50px", paddingRight:"5px"}}/>
      <div>
      <h1 style={{ marginTop: "5px", fontWeight: "bold", fontSize: "16px" }}>{name}</h1>
        <span>Rp {price.toLocaleString("id")}</span>
        <p>{notes}</p>
      </div>
    </li>
  );
}
export default CartItem;
