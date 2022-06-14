import React, { Fragment, useEffect, Component } from "react";
import { ShoppingBag, Download, AlertCircle, Trash2 } from "react-feather";
import { Notification, All } from "../../../constant";
import { store, persistor } from "../../../store";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {compose} from "redux"

const AddToCart = (props) => {



  const addcart = (product, qty) => {
    // dispatch({ type: 'ADD_TO_CART', payload: { product, qty } })
    console.log("this.props.history", props);
    props.history.push(`${process.env.PUBLIC_URL}/ecommerce/cart/5`);
  };

  let { cart } = props;
  return (
    <Fragment>
      <div>
        <ul className="notification-dropdown onhover-show-div p-0">
          <li>
            Cart Items
            <span className="badge badge-pill badge-primary pull-right">
              {cart?.length}
            </span>
          </li>
          {cart?.length > 0 ? (
            cart.map((singleItem, index) => {
              return (
                <li id={index}>
                  <div className="media  ">
                    <div className="media-body d-flex flex-row justify-content-between">
                      <img
                        className="w-25"
                        src="https://5.imimg.com/data5/PJ/DI/MY-3877854/round-neck-plain-tshirt-with-multi-color-design-500x500.png"
                        alt=""
                      />
                      <div>
                        <h6 className="font-weight-bolder">
                          {singleItem.name}
                        </h6>
                        <h6 className="mt-0">
                          ${singleItem.price * singleItem.qty}
                        </h6>
                      </div>
                      <p className="mt-2">
                        <Trash2 />
                      </p>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <li>
              <div className="media">
                <div className="media-body">
                  <h6 className="mt-0 txt-success">{"Your Cart is empty"}</h6>
                </div>
              </div>
            </li>
          )}
          <li className="txt-dark">
            <a href="#javascript">
              <button
                className="btn btn-primary m-r-10"
                type="button"
                onClick={() => addcart()}
              >
                Go To Cart
              </button>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  cart: state.Cart.cart,
});

const mapDispatchToProps = {};



export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AddToCart);

// export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
