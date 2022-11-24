"use client";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import requests from "../services/api/requests";
import TextField from "./TextField";
import TextArea from "./TextArea";
import Spinner from "./Spinner";

import formatPhoneNumber from "../utitlities/formatPhoneNumber";

// validation
import validateNoSpecialChars from "../utitlities/validateNoSpecialChars";
import validateEmail from "../utitlities/validateEmail";
import validateZAPhoneNumber from "../utitlities/validateZAPhoneNumber";

import emailDomains from "../data/emailDomains";

const defaultFormData = {
  firstName: {
    value: "",
    error: null,
  },
  lastName: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
  phoneNumber: {
    value: "",
    error: null,
  },
  message: {
    value: "",
    error: null,
  },
};

const Wrapper = ({ children }) => {
  return <div className={`flex-grow`}>{children}</div>;
};

const LeadForm = ({ isEnquiry, carData }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  //#region EMAIL SUGGESTION
  const emailRef = useRef(null);
  const prevEmail = useRef("");
  const prevVal = useRef("");

  const suggest = (email) => {
    const theDomains = [...emailDomains];

    const [, /* emailName */ partialDomain] = email.split("@");
    if (!partialDomain || email.length <= prevVal.current.length) return "";
    const domain = theDomains.find((d) => d.indexOf(partialDomain) === 0) || "";
    return domain.replace(partialDomain, "");
  };

  const highlight = (suggestion) => {
    setTimeout(() => {
      emailRef.current?.setAttribute("type", "text");
      const email = prevVal.current + suggestion;
      const startPos = email.lastIndexOf(suggestion);
      const endPos = startPos + suggestion.length;
      emailRef.current?.setSelectionRange(startPos, endPos);

      emailRef.current?.setAttribute("type", "email");
    }, 0);
  };

  const emailChangeHandler = (e) => {
    const value = e.target.value;
    const suggestion = suggest(value);
    const theEmail = value + suggestion;
    const newValue = {
      ...formData.email,
      value: theEmail,
    };

    setFormData((prev) => ({ ...prev, email: newValue }));
    //setEmail(theEmail);

    if (suggestion) highlight(suggestion);
    prevEmail.current = theEmail;
    prevVal.current = value;
  };

  //#endregion

  const validateFormData = (data, validateMessage) => {
    let formDataCopy = { ...data };

    // First name validation
    if (!formDataCopy.firstName.value) {
      formDataCopy = {
        ...formDataCopy,
        firstName: {
          ...formDataCopy.firstName,
          error: "Required field!",
        },
      };
    } else {
      const validationError = validateNoSpecialChars(
        formDataCopy.firstName.value
      );

      if (validationError) {
        formDataCopy = {
          ...formDataCopy,
          firstName: {
            ...formDataCopy.firstName,
            error: validationError,
          },
        };
      } else if (formDataCopy.firstName.error) {
        formDataCopy = {
          ...formDataCopy,
          firstName: {
            ...formDataCopy.firstName,
            error: null,
          },
        };
      }
    }

    // Last name validation
    if (!formDataCopy.lastName.value) {
      formDataCopy = {
        ...formDataCopy,
        lastName: {
          ...formDataCopy.lastName,
          error: "Required field!",
        },
      };
    } else {
      const validationError = validateNoSpecialChars(
        formDataCopy.lastName.value
      );

      if (validationError) {
        formDataCopy = {
          ...formDataCopy,
          lastName: {
            ...formDataCopy.lastName,
            error: validationError,
          },
        };
      } else if (formDataCopy.lastName.error) {
        formDataCopy = {
          ...formDataCopy,
          lastName: {
            ...formDataCopy.lastName,
            error: null,
          },
        };
      }
    }

    // Email validation
    if (!formDataCopy.email.value) {
      formDataCopy = {
        ...formDataCopy,
        email: {
          ...formDataCopy.email,
          error: "Required field!",
        },
      };
    } else {
      const emailValidationError = validateEmail(formDataCopy.email.value);

      if (emailValidationError) {
        formDataCopy = {
          ...formDataCopy,
          email: {
            ...formDataCopy.email,
            error: emailValidationError,
          },
        };
      } else if (formDataCopy.email.error) {
        formDataCopy = {
          ...formDataCopy,
          email: {
            ...formDataCopy.email,
            error: null,
          },
        };
      }
    }

    // Phone number validation
    if (!formDataCopy.phoneNumber.value) {
      formDataCopy = {
        ...formDataCopy,
        phoneNumber: {
          ...formDataCopy.phoneNumber,
          error: "Required field!",
        },
      };
    } else {
      const phoneValidationError = validateZAPhoneNumber(
        formDataCopy.phoneNumber.value
      );

      if (phoneValidationError) {
        formDataCopy = {
          ...formDataCopy,
          phoneNumber: {
            ...formDataCopy.phoneNumber,
            error: phoneValidationError,
          },
        };
      } else if (formDataCopy.phoneNumber.error) {
        formDataCopy = {
          ...formDataCopy,
          phoneNumber: {
            ...formDataCopy.phoneNumber,
            error: null,
          },
        };
      }
    }

    // Message validation
    if (validateMessage) {
      if (!formDataCopy.message.value) {
        formDataCopy = {
          ...formDataCopy,
          message: {
            ...formDataCopy.message,
            error: "Required field!",
          },
        };
      } else if (formDataCopy.message.error) {
        formDataCopy = {
          ...formDataCopy,
          message: {
            ...formDataCopy.message,
            error: null,
          },
        };
      }
    }

    return formDataCopy;
  };

  const submitEnquiry = async (formData) => {
    const data = {
      UserFirstname: formData.firstName.value,
      UserSurname: formData.lastName.value,
      UserName: formData.email.value,
      UserPhoneNumber: formData.phoneNumber.value,
      ContactMessage: formData.message.value,
      UserType: "USER",
      ServiceType: "CONTACT",
      UserToken: uuidv4(),
    };

    const resp = await requests.submitEnquiry(data);
    return resp;
  };

  const submitLead = async (formData, carData) => {
    const data = {
      userFirstname: formData.firstName.value,
      userSurname: formData.lastName.value,
      userName: formData.email.value,
      userPhoneNumber: formData.phoneNumber.value,
      modelID: carData?.model.modelID,
      brandName: carData?.brand?.brandName,
      rangeName: carData?.range?.rangeName,
      modelName: carData?.model?.modelName,
      clientID: uuidv4(),
      subscriber_Code: "React_V2",
      colors: [],
      hasTradein: false,
      needsFinance: false,
      PreloadedDealsID: 71,
      carterUIDState: "created",
    };

    return await requests.submitLead(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataCopy = validateFormData(formData, isEnquiry);
    setFormData(formDataCopy);

    if (!isEnquiry) {
      delete formDataCopy.message;
    }

    if (
      !Object.values(formDataCopy).some(({ value, error }) => !value || error)
    ) {
      const resp = isEnquiry
        ? await submitEnquiry(formDataCopy)
        : await submitLead(formDataCopy, carData);

      resp && setFormData(defaultFormData);

      // notification?
    }

    setLoading(false);
  };

  return (
    <form className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
      <div className={`flex flex-wrap ${isEnquiry && "gap-6"} w-full`}>
        <Wrapper>
          <TextField
            label="First name"
            value={formData.firstName.value}
            error={formData.firstName.error}
            placeholder="First name"
            isRequired={true}
            isDisabled={loading}
            onChange={(e) => {
              const value = e.target.value;
              const newValue = {
                ...formData.firstName,
                value,
              };
              setFormData((prev) => ({ ...prev, firstName: newValue }));
            }}
          />
        </Wrapper>

        <Wrapper>
          <TextField
            label="Last name"
            value={formData.lastName.value}
            error={formData.lastName.error}
            placeholder="Last name"
            isRequired={true}
            isDisabled={loading}
            onChange={(e) => {
              const value = e.target.value;
              const newValue = {
                ...formData.lastName,
                value,
              };
              setFormData((prev) => ({ ...prev, lastName: newValue }));
            }}
          />
        </Wrapper>
      </div>
      <Wrapper>
        <TextField
          ref={emailRef}
          label="Email"
          value={formData.email.value}
          error={formData.email.error}
          placeholder="you@company.com"
          isRequired={true}
          isDisabled={loading}
          onChange={(e) => {
            emailChangeHandler(e);
          }}
        />
      </Wrapper>
      <Wrapper>
        <TextField
          label="Phone Number"
          value={formData.phoneNumber.value}
          error={formData.phoneNumber.error}
          placeholder="Phone Number"
          isRequired={true}
          isDisabled={loading}
          maxLength={14}
          onChange={(e) => {
            const value = formatPhoneNumber(e.target.value);
            const newValue = {
              ...formData.phoneNumber,
              value,
            };
            setFormData((prev) => ({ ...prev, phoneNumber: newValue }));
          }}
        />
      </Wrapper>
      {isEnquiry && (
        <Wrapper>
          <TextArea
            label="Message"
            value={formData.message.value}
            error={formData.message.error}
            isRequired={true}
            isDisabled={loading}
            onChange={(e) => {
              const value = e.target.value;
              const newValue = {
                ...formData.message,
                value,
              };
              setFormData((prev) => ({ ...prev, message: newValue }));
            }}
          />
        </Wrapper>
      )}
      <button
        disabled={loading}
        className="flex items-center justify-center text-xs bg-custom-tertiary text-white font-medium rounded-lg h-10 hover:brightness-90 active:brightness-95 mt-4 disabled:pointer-events-none disabled:bg-opacity-95"
        type="submit"
      >
        {!loading && (
          <span>{isEnquiry ? "Submit message" : "Submit enquiry"}</span>
        )}
        {loading && (
          <Spinner
            color="text-white"
            fill="fill-custom-primary"
            classNameSize="h-5 w-5"
            className="text-opacity-5"
          />
        )}
      </button>
    </form>
  );
};

export default LeadForm;