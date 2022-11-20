"use client";
import { useState } from "react";
import TextField from "../../components/TextField";
import TextArea from "../../components/TextArea";

const Wrapper = ({ children }) => {
  return <div className={`flex-grow`}>{children}</div>;
};

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: {
      value: "",
      error: "",
    },
    lastName: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    phoneNumber: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  });

  const handleSubmit = async (e) => {
    setLoading(true);

    // validate the form

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
        className="text-xs bg-custom-primary text-white font-medium rounded-lg py-3 hover:brightness-90 active:brightness-95 mt-6"
        type="button"
      >
        Send message
      </button>
    </form>
  );
};

export default Form;
