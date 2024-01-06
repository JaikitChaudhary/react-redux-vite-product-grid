import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../actions/cart.action";
import CartList from "./cartList";

const Header = () => {
  const cart = useSelector((state) => state?.cart || {});
  const cartData = cart?.data || [];
  const cartDataCount = cart?.data.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );
  const showCartData = cart?.showCart || false;
  const cartElemRef = useRef(null);
  const dispatch = useDispatch();
  const handleShowCart = (e) => {
    dispatch(showCart(e));
  };
  //   const [showCart, setShowCart] = useState(false);
  return (
    <header>
      <AppBar>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div style={{ textAlign: "left" }}>
                <img src="logo.png" width={50} />
              </div>
            </Grid>
            <Grid ref={cartElemRef} item xs={4}>
              <div style={{ textAlign: "right" }}>
                <Badge badgeContent={cartDataCount || 0} color="primary">
                  <img
                    src="cart.png"
                    onClick={() => handleShowCart(true)}
                    style={{ paddingTop: "10px", cursor: "pointer" }}
                    width={30}
                  />
                </Badge>
              </div>
            </Grid>
            <CartList
              cartData={cartData}
              handleShowCart={handleShowCart}
              showCart={showCartData}
              cartElemRef={cartElemRef}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
