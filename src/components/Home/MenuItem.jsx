/* eslint-disable react/prop-types */
function MenuItem({ name, price, image }) {
  return (
    <li
      style={{
        listStyle: "none",
      }}
    >
       <img src ={image} width={"500px"} height={"180px"} style={{width:"500px", height:"250px"}}/>
      <div>
      <h1 style={{ marginTop: "16px", fontWeight: "bold", fontSize: "18px" }}>{name}</h1>
        <span>Rp {price.toLocaleString("id")}</span>
      </div>
    </li>
  );
}
export default MenuItem;
