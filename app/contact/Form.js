"use client";
import { useState } from "react";
import TextField from "../../components/TextField";
import TextArea from "../../components/TextArea";

// validation
import validateNoSpecialChars from "../../utitlities/validateNoSpecialChars";
import validateEmail from "../../utitlities/validateEmail";
import validateZAPhoneNumber from "../../utitlities/validateZAPhoneNumber";

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

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const handleSubmit = async (e) => {
    setLoading(true);

    let formDataCopy = { ...formData };

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

    setFormData(formDataCopy);

    if (
      !Object.values(formDataCopy).some(({ value, error }) => !value || error)
    ) {
      // Submit form data
    }

    e.preventDefault();

    setLoading(false);
  };

  return (
    <form className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row md:gap-6 w-full">
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
          label="Email"
          value={formData.email.value}
          error={formData.email.error}
          placeholder="you@company.com"
          isRequired={true}
          isDisabled={loading}
          onChange={(e) => {
            const value = e.target.value;
            const newValue = {
              ...formData.email,
              value,
            };
            setFormData((prev) => ({ ...prev, email: newValue }));
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
          maxLength={12}
          onChange={(e) => {
            const value = e.target.value;
            const newValue = {
              ...formData.phoneNumber,
              value,
            };
            setFormData((prev) => ({ ...prev, phoneNumber: newValue }));
          }}
        />
      </Wrapper>
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
      <button
        className="text-xs bg-custom-tertiary text-white font-medium rounded-lg py-3 hover:brightness-90 active:brightness-95 mt-4"
        type="submit"
      >
        Send message
      </button>
    </form>
  );
};

export default Form;
