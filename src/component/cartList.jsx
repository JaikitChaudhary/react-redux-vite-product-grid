import { Menu, MenuItem } from "@material-ui/core";

const CartList = (cartData, handleShowCart, showCart, cartElemRef) => {
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
