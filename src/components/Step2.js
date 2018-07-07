import React from "react";

const StepTwo = ({
  name,
  phoneNumber,
  email,
  dropshipperName,
  dropshipperPhone,
  address,
  toggleDeliveryAgency,
  validateAgency,
  deliveryAgency,
  deliveryPrice,
  deliveryEstimate,
  radioSelectedState,
  toggleRadioSelection,
  radioWalletState,
  radioBankState,
  radioVirtualState,
  paymentMethodState
}) => (
  <div className="information-form">
    <div>
      <h3>Step 2: Shipping</h3>
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
          <p> {address}</p>
        </div>
      </div>
    </div>
    <hr className="step2-hr" />
    <div className="step2-form-container">
      <div className="form-information">
        <div className="form-title">
          <div>
            <label>Delivery Service</label>
          </div>
        </div>
        <div className="form-textarea">
          <button
            className="step2-service-button"
            value="JNE"
            onClick={toggleDeliveryAgency}
          >
            JNE
          </button>
          <button
            className="step2-service-button"
            value="GoSend"
            onClick={toggleDeliveryAgency}
          >
            GoSend
          </button>
          <button
            className="step2-service-button"
            value="SiCepat"
            onClick={toggleDeliveryAgency}
          >
            Sicepat
          </button>
          <div>
            <small>
              {validateAgency === null ? (
                <span />
              ) : validateAgency === true ? (
                <span className="valid">{deliveryAgency} is Selected..</span>
              ) : (
                <span className="invalid">
                  Please select one of the delivery agency!
                </span>
              )}
            </small>
          </div>
        </div>
        <div className="form-title">
          <div>
            <label>Delivery Price</label>
          </div>
        </div>
        <div className="form-textarea">
          :{" "}
          <span>
            <b>Rp.{deliveryPrice}</b>
          </span>
        </div>
        <div className="form-title">
          <div>
            <label>Delivery Estimate</label>
          </div>
        </div>
        <div className="form-textarea">
          :{" "}
          <span>
            <b>{deliveryEstimate}</b>
          </span>
          <div />
        </div>
        <div className="form-title">
          <div>
            <label>Payment Method</label>
          </div>
        </div>
        <div className="form-textarea">
          <div className="radio-container">
            <div className="radio">
              <input
                type="radio"
                value="Wallet"
                checked={radioSelectedState === "Wallet"}
                onChange={toggleRadioSelection}
                disabled={radioWalletState}
              />
              Wallet
            </div>
            <div className="radio">
              <input
                type="radio"
                value="Bank Transfer"
                checked={radioSelectedState === "Bank Transfer"}
                onChange={toggleRadioSelection}
                disabled={radioBankState}
              />
              Bank Transfer
            </div>
            <div className="radio">
              <input
                type="radio"
                value="Virtual Account"
                checked={radioSelectedState === "Virtual Account"}
                onChange={toggleRadioSelection}
                disabled={radioVirtualState}
              />
              Virtual Account
              <div />
              <div>
                <small>
                  {paymentMethodState === null ? (
                    <span />
                  ) : radioSelectedState === "Wallet" ||
                  radioSelectedState === "Bank Transfer" ||
                  radioSelectedState === "Virtual Account" ? (
                    <span className="valid">
                      {radioSelectedState} is Selected..
                    </span>
                  ) : (
                    <span className="invalid">
                      Please select one of the Payment Method!
                    </span>
                  )}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StepTwo;
