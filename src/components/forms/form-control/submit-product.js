import React, { Fragment, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import ImageUploader from "react-images-upload";

import axios from "axios";
import { ServerUrl } from "../../../constant/index";
import { ToastContainer, toast } from "react-toastify";
const BaseInput = () => {
  // SET INPUT DATA USESTATE
  const [selectedName, setName] = useState("");
  const [selectedPrice, setPrice] = useState("");
  const [selectedProductDetails, setProductDetails] = useState("");
  const [selectedSizes, setAvailableSizes] = useState([]);
  const [selectedCategories, setCategories] = useState([]);
  const [selectedSubCategories, setSubCategories] = useState([]);
  const [productImage, setProductImage] = useState("");

  const multiple = true;

  //ON SELECTION OF PRODUCT IMAGE
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setProductImage(pictureDataURLs[0]);
  };

  // RESET ALL FORM FIELDS
  const resetFormFields = () => {
    selectedName("");
    selectedPrice("");
    selectedProductDetails("");
    selectedSizes([]);
    selectedCategories([]);
    selectedSubCategories([]);
    productImage("");
  };

  //ON FORM SUBMISSION
  const onSubmit = (data) => {
    axios
      .post(`${ServerUrl}/product`, {
        name: selectedName,
        price: selectedPrice,
        image: productImage,
        availableSizes: selectedSizes,
        productDetails: selectedProductDetails,
        category: selectedCategories[0],
        subCategory: selectedSubCategories[0],
      })
      .then(async function (response) {
        resetFormFields();
        toast.success("Product addeed successfully !");
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };
  let subCategoriesOptions = [];
  if (selectedCategories[0] === "Mens") {
    subCategoriesOptions = ["T-Shirt", "Shirt", "Jeans", "Cap"];
  }
  if (selectedCategories[0] === "Womens") {
    subCategoriesOptions = [
      "Top",
      "Ethenic Wear",
      "Footwear",
      "Jeans",
      "Watch",
      "Accessories",
    ];
  }
  if (selectedCategories[0] === "Kids") {
    subCategoriesOptions = [
      "Toy",
      "Baby Care",
      "School Supplies",
      "Kids Clothing",
    ];
  }
  if (selectedCategories[0] === "Home & Furniture") {
    subCategoriesOptions = [
      "Home Decor",
      "Furnishing",
      "Office & Study Furniture",
      "Gardening Store",
    ];
  }
  let disableSubmitButton = true;
  if (
    selectedName.length > 0 &&
    selectedPrice.length > 0 &&
    selectedProductDetails.length > 0 &&
    selectedSizes.length > 0 &&
    selectedCategories.length > 0 &&
    selectedSubCategories.length > 0 &&
    productImage.length > 0
  ) {
    disableSubmitButton = false;
  }
  return (
    <Fragment>
      {/* <Breadcrumb title="Basic Input" parent="Form" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Submit New Product</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="name"
                          // onChange={setName((e)=>e.target.value)}
                          onChange={(ev) => setName(ev.target.value)}
                        />
                        {selectedName.length === 0 ? (
                          <span className="text-danger">
                            {"Name is required"}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput">Price</label>
                        <input
                          className="form-control"
                          type="number"
                          name="price"
                          placeholder=""
                          onChange={(ev) => setPrice(ev.target.value)}
                        />
                        {selectedPrice.length === 0 ? (
                          <span className="text-danger">
                            {"Price is required"}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <ImageUploader
                          withIcon={false}
                          withPreview={true}
                          singleImage={true}
                          label=""
                          name="productImage"
                          buttonText="Upload product Image"
                          onChange={onDrop}
                          imgExtension={[
                            ".jpg",
                            ".gif",
                            ".png",
                            ".gif",
                            ".svg",
                          ]}
                          maxFileSize={1048576}
                          fileSizeError=" file size is too big"
                        />
                        {productImage.length === 0 ? (
                          <span className="text-danger">
                            {"Product Image is required"}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <div className="col-form-label pt-0">
                          Available Sizes
                        </div>
                        <Typeahead
                          id="basic-typeahead"
                          labelKey="name"
                          multiple={multiple}
                          onChange={setAvailableSizes}
                          name="sdsds"
                          options={["L", "M", "XL", "XXL"]}
                          placeholder="Choose Size..."
                        />
                        {selectedSizes.length === 0 ? (
                          <span className="text-danger">
                            {"Please select size"}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlTextarea4">
                          Product Details
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea4"
                          rows="3"
                          name="productDetails"
                          onChange={(ev) => setProductDetails(ev.target.value)}
                        ></textarea>
                        {selectedProductDetails.length === 0 ? (
                          <span className="text-danger">
                            {"Product Details are required"}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="col-form-label pt-0">Category</div>
                      <div className="form-group">
                        <Typeahead
                          id="basic-typeahead"
                          labelKey="name"
                          multiple={false}
                          onChange={setCategories}
                          options={[
                            "Mens",
                            "Womens",
                            "Kids",
                            "Home & Furniture",
                          ]}
                          placeholder="Choose Category..."
                        />
                        {selectedCategories.length === 0 ? (
                          <div className="text-danger">
                            {"Please seect Categories"}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="col-form-label pt-0">Sub Category</div>
                      <div className="form-group">
                        <Typeahead
                          id="basic-typeahead"
                          labelKey="name"
                          multiple={false}
                          onChange={setSubCategories}
                          options={subCategoriesOptions}
                          placeholder="Choose Sub-cartegory..."
                        />
                        {selectedSubCategories.length === 0 ? (
                          <div className="text-danger">
                            {"Please select Sub-Categories"}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary mr-1"
                    type="button"
                    onClick={onSubmit}
                    disabled={disableSubmitButton}
                  >
                    {"Submit"}
                  </button>
                  <input
                    className="btn btn-light"
                    type="reset"
                    defaultValue="Cancel"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BaseInput;
