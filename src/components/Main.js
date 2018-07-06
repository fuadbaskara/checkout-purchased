import React, { Component } from "react";

import StepIndicator from "./StepIndicator";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import ButtonForm from "./ButtonForm";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      stepState: 1,
      radioState: false,
      dropshipperNameState: true,
      dropshipperPhoneState: true,
      dropshipperName: "",
      dropshipperPhone: "",
      name: "",
      phoneNumber: "",
      address: "",
      email: "",
      phoneMinLength: 6,
      phoneMaxLength: 20,
      addressMaxLength: 120,
      validateDropshipperName: null,
      validateDropshipperPhone: null,
      validateName: null,
      validatePhone: null,
      validateAddress: null,
      validateEmail: null,
      deliveryState: null,
      paymentMethodState: null,
      radioWalletState: true,
      radioBankState: true,
      radioVirtualState: true,
      radioSelectedState: null,
      deliveryAgency: null,
      deliveryPrice: null,
      deliveryEstimate: null,
      servicePrice: 2000,
      validateAgency: null,
      validatePaymentMethod: null,
      formNotice: false
    };
    this.changeRadioState = this.changeRadioState.bind(this);
    this.handleChangeDropShipperName = this.handleChangeDropShipperName.bind(
      this
    );
    this.getDropShipperPhone = this.getDropShipperPhone.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.phoneValidation = this.phoneValidation.bind(this);
    this.nameValidation = this.nameValidation.bind(this);
    this.addressValidation = this.addressValidation.bind(this);
    this.dropshipperNameValidation = this.dropshipperNameValidation.bind(this);
    this.dropshipperPhoneValidation = this.dropshipperPhoneValidation.bind(
      this
    );
    this.validateCurrentForm = this.validateCurrentForm.bind(this);
    this.backButton = this.backButton.bind(this);
    this.toggleRadioSelection = this.toggleRadioSelection.bind(this);
    this.toggleDeliveryAgency = this.toggleDeliveryAgency.bind(this);
    this.validatePaymentMethod = this.validatePaymentMethod.bind(this);
    this.showSubmitNotice = this.showSubmitNotice.bind(this);
  }

  handleChangeDropShipperName(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        dropshipperName: value
      };
    });
    this.dropshipperNameValidation(event.target.value);
  }

  getDropShipperPhone(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        dropshipperPhone: value
      };
    });
    this.dropshipperPhoneValidation(event.target.value);
  }

  handleChangeName(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        name: value
      };
    });
    this.nameValidation(event.target.value);
  }

  handleChangePhoneNumber(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        phoneNumber: value
      };
    });
    this.phoneValidation(event.target.value);
  }

  handleChangeAddress(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        address: value
      };
    });
    this.addressValidation(event.target.value);
  }

  handleChangeEmail(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        email: value
      };
    });
    this.emailValidation(event.target.value);
  }

  /* ----------Below is the validation method for Dropshipper Name*/

  dropshipperNameValidation(dropshipperName) {
    if (dropshipperName !== "" && dropshipperName.length > 3) {
      this.setState(() => {
        return {
          validateDropshipperName: true
        };
      });
    } else {
      this.setState(() => {
        return {
          validateDropshipperName: false
        };
      });
    }
  }

  dropshipperPhoneValidation(dropshipperPhone) {
    var phoneRegExp = /\(?(?:\+62|62|0|[0-9])(?:\d{2,10})?\)?[ .-]?\d{2,10}[ .-]?\d{2,4}[ .-]?\d{2,10}/g;
    var charRegExp = /[a-zA-Z]/;
    for (var i = 0; i < dropshipperPhone.length; i++) {
      if (dropshipperPhone.match(charRegExp)) {
        this.setState(() => {
          return {
            validateDropshipperPhone: false
          };
        });
      } else if (
        dropshipperPhone.match(phoneRegExp) &&
        !dropshipperPhone.match(charRegExp)
      ) {
        this.setState(() => {
          return {
            validateDropshipperPhone: true
          };
        });
      } else if (
        !dropshipperPhone.match(phoneRegExp) &&
        dropshipperPhone.match(charRegExp)
      ) {
        this.setState(() => {
          return {
            validateDropshipperPhone: false
          };
        });
      } else {
        this.setState(() => {
          return {
            validateDropshipperPhone: null
          };
        });
      }
    }
  }

  nameValidation(name) {
    if (name !== "" && name.length > 3) {
      this.setState(() => {
        return {
          validateName: true
        };
      });
    } else {
      this.setState(() => {
        return {
          validateName: false
        };
      });
    }
  }

  phoneValidation(phoneNumber) {
    var phoneRegExp = /\(?(?:\+62|62|0|[0-9])(?:\d{2,10})?\)?[ .-]?\d{2,10}[ .-]?\d{2,4}[ .-]?\d{2,10}/g;
    var charRegExp = /[a-zA-Z]/;
    for (var i = 0; i < phoneNumber.length; i++) {
      if (phoneNumber.match(charRegExp)) {
        this.setState(() => {
          return {
            validatePhone: false
          };
        });
      } else if (
        phoneNumber.match(phoneRegExp) &&
        !phoneNumber.match(charRegExp)
      ) {
        this.setState(() => {
          return {
            validatePhone: true
          };
        });
      } else if (
        !phoneNumber.match(phoneRegExp) &&
        phoneNumber.match(charRegExp)
      ) {
        this.setState(() => {
          return {
            validatePhone: false
          };
        });
      } else {
        this.setState(() => {
          return {
            validatePhone: null
          };
        });
      }
    }
  }

  addressValidation(address) {
    if (address !== "" && address.length > 20) {
      this.setState(() => {
        return {
          validateAddress: true
        };
      });
    } else {
      this.setState(() => {
        return {
          validateAddress: false
        };
      });
    }
  }

  emailValidation(email) {
    var emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email.match(emailRegExp)) {
      this.setState(() => {
        return {
          validateEmail: true
        };
      });
    } else if (!email.match(emailRegExp)) {
      this.setState(() => {
        return {
          validateEmail: false
        };
      });
    } else {
      this.setState(() => {
        return {
          validateEmail: null
        };
      });
    }
  }

  async validatePaymentMethod() {
    if (
      this.state.radioSelectedState === "Wallet" ||
      this.state.radioSelectedState === "Bank Transfer" ||
      this.state.radioSelectedState === "Virtual Account"
    ) {
      await this.setState(() => {
        return {
          paymentMethodState: !this.state.paymentMethodState
        };
      });
    }
  }

  async validateCurrentForm() {
    await this.validatePaymentMethod();
    if ((await this.state.stepState) === 1) {
      if (
        this.state.validateName === true &&
        this.state.validatePhone === true &&
        this.state.validateAddress === true &&
        this.state.validateEmail === true
      ) {
        if (
          this.state.validateDropshipperName === true ||
          this.state.validateDropshipperName === null
        ) {
          if (
            this.state.validateDropshipperPhone === true ||
            this.state.validateDropshipperPhone === null
          ) {
            await this.setState(() => {
              return {
                stepState: this.state.stepState + 1,
                formNotice: false
              };
            });
          }
        }
      }
      if (
        this.state.validateName === null ||
        this.state.validatePhone === null ||
        this.state.validateAddress === null ||
        this.state.validateEmail === null
      ) {
        this.setState(() => {
          return {
            formNotice: true
          };
        });
      }
    } else if (this.state.stepState === 2) {
      if (
        this.state.validateAgency === true &&
        this.state.paymentMethodState === true &&
        this.state.radioSelectedState !== null
      ) {
        this.setState(() => {
          return {
            stepState: this.state.stepState + 1
          };
        });
      }
      if (
        this.state.validateAgency === null &&
        this.state.paymentMethodState === null &&
        this.state.radioSelectedState === null
      ) {
        if (this.state.paymentMethodState === false) {
          this.setState(() => {
            return {
              validateAgency: false,
              validatePaymentMethod: false
            };
          });
        }
      }
      if (this.state.validateAgency === null) {
        this.setState(() => {
          return {
            validateAgency: false
          };
        });
      }
      if (this.state.paymentMethodState === null) {
        this.setState(() => {
          return {
            paymentMethodState: false
          };
        });
      }
    }
  }

  toggleRadioSelection(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        radioSelectedState: value
      };
    });
  }

  async toggleDeliveryAgency(event) {
    let value = event.target.value;
    if (value === "JNE") {
      await this.setState(() => {
        return {
          deliveryAgency: value,
          deliveryPrice: 15000,
          deliveryEstimate: "2 Days",
          radioWalletState: false,
          radioBankState: true,
          radioVirtualState: false,
          validateAgency: true,
          validatePaymentMethod: null,
          radioSelectedState: null
        };
      });
    } else if (value === "GoSend") {
      await this.setState(() => {
        return {
          deliveryAgency: value,
          deliveryPrice: 35000,
          deliveryEstimate: "Half Day",
          radioWalletState: false,
          radioBankState: true,
          radioVirtualState: true,
          validateAgency: true,
          validatePaymentMethod: null,
          radioSelectedState: null
        };
      });
    } else if (value === "SiCepat") {
      await this.setState(() => {
        return {
          deliveryAgency: value,
          deliveryPrice: 10000,
          deliveryEstimate: "1 Day",
          radioWalletState: false,
          radioBankState: false,
          radioVirtualState: false,
          validateAgency: true,
          validatePaymentMethod: null,
          radioSelectedState: null
        };
      });
    }
  }

  async backButton() {
    if (this.state.stepState !== 1) {
      await this.setState(() => {
        return {
          stepState: this.state.stepState - 1
        };
      });
    }
  }

  showSubmitNotice() {
    this.setState(() => {
      return {
        stepState: 1,
        radioState: false,
        dropshipperNameState: true,
        dropshipperPhoneState: true,
        dropshipperName: "",
        dropshipperPhone: "",
        name: "",
        phoneNumber: "",
        address: "",
        email: "",
        phoneMinLength: 6,
        phoneMaxLength: 20,
        addressMaxLength: 120,
        validateDropshipperName: null,
        validateDropshipperPhone: null,
        validateName: null,
        validatePhone: null,
        validateAddress: null,
        validateEmail: null,
        deliveryState: null,
        paymentMethodState: null,
        radioWalletState: true,
        radioBankState: true,
        radioVirtualState: true,
        radioSelectedState: null,
        deliveryAgency: null,
        deliveryPrice: null,
        deliveryEstimate: null,
        servicePrice: 2000,
        validateAgency: null,
        validatePaymentMethod: null
      };
    });
  }

  changeRadioState() {
    this.setState(() => {
      return {
        radioState: !this.state.radioState,
        dropshipperNameState: !this.state.dropshipperNameState,
        dropshipperPhoneState: !this.state.dropshipperPhoneState,
        dropshipperName: "",
        dropshipperPhone: ""
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <h1>Checkout Your Purchase</h1>
        </div>
        <StepIndicator stepState={this.state.stepState} />
        <div className="form-content-container">
          {this.state.stepState === 1 ? (
            <div>
              <StepOne
                radioState={this.state.radioState}
                dropshipperNameState={this.state.dropshipperNameState}
                dropshipperPhoneState={this.state.dropshipperPhoneState}
                dropshipperName={this.state.dropshipperName}
                dropshipperPhone={this.state.dropshipperPhone}
                name={this.state.name}
                phoneNumber={this.state.phoneNumber}
                address={this.state.address}
                email={this.state.email}
                phoneMinLength={this.state.phoneMinLength}
                phoneMaxLength={this.state.phoneMaxLength}
                addressMaxLength={this.state.addressMaxLength}
                validateDropshipperName={this.state.validateDropshipperName}
                validateDropshipperPhone={this.state.validateDropshipperPhone}
                validateName={this.state.validateName}
                validatePhone={this.state.validatePhone}
                validateAddress={this.state.validateAddress}
                validateEmail={this.state.validateEmail}
                changeRadioState={this.changeRadioState}
                handleChangeDropShipperName={this.handleChangeDropShipperName}
                getDropShipperPhone={this.getDropShipperPhone}
                handleChangeName={this.handleChangeName}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                handleChangeAddress={this.handleChangeAddress}
                handleChangeEmail={this.handleChangeEmail}
              />
              {this.state.formNotice === true ? (
                <div className="form-notice">
                  <p>
                    Please at least fill your Name, Phone number, Address and
                    E-mail
                  </p>
                </div>
              ) : (
                <div />
              )}
            </div>
          ) : this.state.stepState === 2 ? (
            <div>
              <StepTwo
                name={this.state.name}
                phoneNumber={this.state.phoneNumber}
                email={this.state.email}
                dropshipperName={this.state.dropshipperName}
                dropshipperPhone={this.state.dropshipperPhone}
                address={this.state.address}
                toggleDeliveryAgency={this.toggleDeliveryAgency}
                validateAgency={this.state.validateAgency}
                deliveryAgency={this.state.deliveryAgency}
                deliveryPrice={this.state.deliveryPrice}
                deliveryEstimate={this.state.deliveryEstimate}
                radioSelectedState={this.state.radioSelectedState}
                toggleRadioSelection={this.toggleRadioSelection}
                radioWalletStat={this.state.radioWalletStat}
                radioBankState={this.state.radioBankState}
                radioVirtualState={this.state.radioVirtualState}
                paymentMethodState={this.state.paymentMethodState}
              />
              {this.state.formNotice === true ? (
                <div className="form-notice">
                  <p>Please select your delivery agency and payment method..</p>
                </div>
              ) : (
                <div />
              )}
            </div>
          ) : this.state.stepState === 3 ? (
            <StepThree
              name={this.state.name}
              phoneNumber={this.state.phoneNumber}
              email={this.state.email}
              dropshipperName={this.state.dropshipperName}
              dropshipperPhone={this.state.dropshipperPhone}
              address={this.state.address}
              deliveryAgency={this.state.deliveryAgency}
              deliveryPrice={this.state.deliveryPrice}
              servicePrice={this.state.servicePrice}
              radioSelectedState={this.state.radioSelectedState}
            />
          ) : (
            <div />
          )}
          <ButtonForm
            stepState={this.state.stepState}
            validateCurrentForm={this.validateCurrentForm}
            backButton={this.backButton}
            showSubmitNotice={this.showSubmitNotice}
          />
        </div>
      </div>
    );
  }
}
