/* eslint-disable react/prop-types */
function MenuItem({ name, price, image }) {
  return (
    <li
      style={{
        listStyle: "none",
      }}
    >
       <img src ={image} width={"500px"} height={"180px"} style={{width:"500px", height:"200px"}}/>
      <div>
      <h1 style={{ marginTop: "14px", fontWeight: "bold", fontSize: "16px" }}>{name}</h1>
        <span style={{fontSize:"14px"}}>Rp {price.toLocaleString("id")}</span>
      </div>
    </li>
  );
}
export default MenuItem;
