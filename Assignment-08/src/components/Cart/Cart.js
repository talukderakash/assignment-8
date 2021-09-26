import React from "react";
import Show from "../Show/Show";
import "./Cart.css";

const Cart = (props) => {
  const { carts } = props;
  console.log(props);
  const totalSalary = carts.reduce((total, member) => {
    return (total += member.salary);
  }, 0);

  console.log(totalSalary);
  return (
    <div>
      <h2>Members added:{carts.length}</h2>
      <h3>Total salary:${totalSalary}</h3>
      {carts.map((member) => (
        <Show member={member} key={member._id}></Show>
      ))}
      <button className="cart-btn">Add now</button>
    </div>
  );
};

export default Cart;
