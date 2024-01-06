import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartList = (cartData, handleShowCart, showCart = false, cartElemRef) => {
  return (
    <Menu
      anchorEl={cartElemRef?.currentTarget}
      id="account-menu"
      open={showCart}
      onClose={() => handleShowCart(false)}
      onClick={() => handleShowCart(!showCart)}
      transformOrigin={{ horizontal: "right", vertical: "bottom" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
    </Menu>
  );
};
export default CartList;
