import React, { Fragment, useEffect, Component } from "react";
import { ShoppingBag, Download, AlertCircle, Trash2 } from "react-feather";
import { Notification, All } from "../../../constant";
import { store, persistor } from "../../../store";
import { connect } from "react-redux";
export class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps) {
    // Update profile after user loggs out or loggs in:
    if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
      this.props.getProfile();
    }
  }
  render() {
    console.log("thi.prosp", this.props);
    let { cart } = this.props;
    return (
      <Fragment>
        <div>
          <ul className="notification-dropdown onhover-show-div p-0">
            <li>
              {Notification}{" "}
              <span className="badge badge-pill badge-primary pull-right">
                {"3"}
              </span>
            </li>
            {cart?.length > 0 ? (
              cart.map((singleItem) => {
                return (
                  <li>
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
                    <h6 className="mt-0 txt-success">{"Nothing in Cart"}</h6>
                  </div>
                </div>
              </li>
            )}
            <li className="txt-dark">
              <a href="#javascript">{All}</a> {Notification}
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.Cart.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
