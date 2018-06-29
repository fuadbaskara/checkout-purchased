import React from "react";

const StepOne = ({
  radioState,
  dropshipperNameState,
  dropshipperPhoneState,
  dropshipperName,
  dropshipperPhone,
  name,
  phoneNumber,
  address,
  email,
  phoneMinLength,
  phoneMaxLength,
  addressMaxLength,
  validateDropshipperName,
  validateDropshipperPhone,
  validateName,
  validatePhone,
  validateAddress,
  validateEmail,
  changeRadioState,
  handleChangeDropShipperName,
  getDropShipperPhone,
  handleChangeName,
  handleChangePhoneNumber,
  handleChangeAddress,
  handleChangeEmail
}) => (
  <div className="information-form">
    <div>
      <h3>Step 1: Information</h3>
    </div>
    <form>
      <label className="dropshipper-container">
        <input
          className="checkbox"
          type="checkbox"
          value={radioState}
          defaultChecked={radioState}
          onClick={changeRadioState}
        />
        Send as Dropshipper
      </label>
      <div className="dropshipper-name-container">
        <input
          className="dropshipper-name"
          type="text"
          placeholder="Dropshipper's Name"
          disabled={dropshipperNameState}
          value={dropshipperName}
          onChange={handleChangeDropShipperName}
        />
        <div>
          <small className="dropshipper-validation">
            {validateDropshipperName === null ? (
              <span />
            ) : validateDropshipperName === true ? (
              <span className="valid">This Name is valid..</span>
            ) : (
              <span className="invalid">Please insert your name..</span>
            )}
          </small>
        </div>
      </div>
      <div className="dropshipper-phone-container">
        <input
          className="dropshipper-phone"
          type="text"
          placeholder="Phone Number"
          minLength={phoneMinLength}
          maxLength={phoneMaxLength}
          disabled={dropshipperPhoneState}
          value={dropshipperPhone}
          onChange={getDropShipperPhone}
        />
        <div>
          <small className="dropshipper-validation">
            {validateDropshipperPhone === null ? (
              <span />
            ) : validateDropshipperPhone === true ? (
              <span className="valid">This phone number is valid..</span>
            ) : (
              <span className="invalid">
                Please insert phone number with only numbers,+,-, and ()
              </span>
            )}
          </small>
        </div>
      </div>
      <div className="form-information">
        <div className="form-title">
          <div>
            <label>Name</label>
          </div>
        </div>
        <div className="form-textarea">
          :{" "}
          <input
            type="text"
            placeholder="insert your Name.."
            value={name}
            onChange={handleChangeName}
          />
          <div>
            <small>
              {validateName === null ? (
                <span />
              ) : validateName === true ? (
                <span className="valid">This name is valid..</span>
              ) : (
                <span className="invalid">Please insert your name..</span>
              )}
            </small>
          </div>
        </div>
        <div className="form-title">
          <div>
            <label>Phone Number</label>
          </div>
        </div>
        <div className="form-textarea">
          :{" "}
          <input
            type="text"
            placeholder="insert your Phone Number.."
            minLength={phoneMinLength}
            maxLength={phoneMaxLength}
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
          <div>
            <small>
              {validatePhone === null ? (
                <span />
              ) : validatePhone === true ? (
                <span className="valid">This phone number is valid..</span>
              ) : (
                <span className="invalid">
                  Please insert phone number with only numbers,+,-, and ()
                </span>
              )}
            </small>
          </div>
        </div>
        <div className="form-title">
          <div>
            <label>Address</label>
          </div>
        </div>
        <div className="form-textarea">
          :{" "}
          <textarea
            rows="4"
            cols="50"
            maxLength={addressMaxLength}
            placeholder="insert your Address.."
            value={address}
            onChange={handleChangeAddress}
          />
          <div>
            <small className="remainin-characters">
              {addressMaxLength - address.length} characters remaining
            </small>
          </div>
          <div>
            <span>
              <p>
                {validateAddress === null ? (
                  <span />
                ) : validateAddress === true ? (
                  <span className="valid">This Address is valid..</span>
                ) : (
                  <span className="invalid">Please insert your Address..</span>
                )}
              </p>
            </span>
          </div>
        </div>
        <div className="form-title">
          <div>
            <label>E-mail</label>
          </div>
        </div>
        <div className="form-textarea">
          :{" "}
          <input
            type="text"
            placeholder="insert your valid e-mail.."
            value={email}
            onChange={handleChangeEmail}
          />
          <div>
            <small>
              {validateEmail === null || "" || undefined ? (
                <span />
              ) : validateEmail === true ? (
                <span className="valid">This E-mail is valid..</span>
              ) : (
                <span className="invalid">
                  Please insert your valid E-mail..{" "}
                </span>
              )}
            </small>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default StepOne;
