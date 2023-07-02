import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteToCart, updateToCart } from "../../actions/cart.action";

const Products = () => {
  const productData = useSelector((state) => state?.product || []);
  const cartData = useSelector((state) => state?.cart?.data || []);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handlUpdateToCart = (product) => {
    console.log(product);
    dispatch(product.qty?updateToCart(product):deleteToCart(product));
  };
  return (
    <div style={{ paddingTop: "80px" }}>
      <GridList cellHeight={400} cols={4}>
        {productData.map((tile) => {
          const cartValue = cartData.find((item) => item.id === tile.id);
          return (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  cartValue && cartValue?.qty ? (
                    <>
                      <button
                        onClick={(e) =>
                          handlUpdateToCart({
                            ...tile,
                            qty: cartValue?.qty - 1,
                          })
                        }
                        style={{ marginRight: "10px" }}
                      >
                        -
                      </button>
                      <span
                        style={{
                          marginRight: "10px",
                          color: "white",
                          fontSize: "20px",
                        }}
                      >
                        {cartValue?.qty}
                      </span>
                      <button
                        onClick={(e) =>
                          handlUpdateToCart({
                            ...tile,
                            qty: cartValue?.qty + 1,
                          })
                        }
                        style={{ marginRight: "10px" }}
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={(e) => handleAddToCart({ ...tile, qty: 1 })}
                      style={{ marginRight: "10px" }}
                    >
                      Add to Cart
                    </button>
                  )
                }
              />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};

export default Products;
