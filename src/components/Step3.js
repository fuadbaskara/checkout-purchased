import React from "react";

const StepThree = ({
  name,
  phoneNumber,
  email,
  dropshipperName,
  dropshipperPhone,
  address,
  deliveryAgency,
  deliveryPrice,
  servicePrice,
  radioSelectedState,
  submitNotice
}) => (
  <div className="information-form">
    <div>
      <h3>Step 3: Confirmation</h3>
    </div>
    <div className="step2-information-container">
      <div className="step2-information-name">
        <div>
          <span>
            <b>Name</b>
          </span>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className="step2-information-phone">
        <div>
          <span>
            <b>Phone Number</b>
          </span>
        </div>
        <div>
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div className="step2-information-email">
        <div>
          <span>
            <b>E-mail</b>
          </span>
        </div>
        <div>
          <p>{email}</p>
        </div>
      </div>
      <div className="step2-information-dropname">
        <div>
          <span>
            <b>Dropshipper Name</b>
          </span>
        </div>
        <div>
          <p>{dropshipperName}</p>
        </div>
      </div>
      <div className="step2-information-dropphone">
        <div>
          <span>
            <b>Dropshipper Phone</b>
          </span>
        </div>
        <div>
          <p>{dropshipperPhone}</p>
        </div>
      </div>
    </div>
    <div className="step2-address-container">
      <div className="step2-information-address">
        <div>
          <span>
            <b>Address</b>
          </span>
        </div>
        <div>
          <p>{address}</p>
        </div>
      </div>
    </div>
    <hr className="step2-hr" />
    <div className="information-form">
      <div>
        <h4>Delivery Details :</h4>
      </div>
      <div className="step2-information-container">
        <div className="step2-information-name">
          <div>
            <span>
              <b>Delivery Agency</b>
            </span>
          </div>
          <div>
            <p>{deliveryAgency}</p>
          </div>
        </div>
        <div className="step2-information-phone">
          <div>
            <span>
              <b>Delivery Price</b>
            </span>
          </div>
          <div>
            <p>Rp.{deliveryPrice}</p>
          </div>
        </div>
        <div className="step2-information-email">
          <div>
            <span>
              <b>Service Price</b>
            </span>
          </div>
          <div>
            <p>Rp.{servicePrice}</p>
          </div>
        </div>
        <div className="step2-information-dropname">
          <div>
            <span>
              <b>Total Price</b>
            </span>
          </div>
          <div>
            <p>Rp.{deliveryPrice + servicePrice}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="step2-address-container">
      <div className="step2-information-address">
        <div>
          <span>
            <b>Payment Method</b>
          </span>
        </div>
        <div>
          <p>{radioSelectedState}</p>
        </div>
      </div>
    </div>
    {submitNotice === true ? (
      <div className="submit-notice">
        <h3>
          {" "}
          Thank You For Your Purchase, We will process your purchase immediately{" "}
        </h3>
      </div>
    ) : (
      <span />
    )}
  </div>
);

export default StepThree;
