import { Button } from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { DefaultInput } from "../shared/DefaultInput";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email";
export type DefaultInputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  callback?: (data: { gender: string; age: number }) => void;
};

export type InputFormFields = {
  gender: string;
};

export const InputForm = (props: DefaultInputProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormFields>();

  const { callback } = props;

  const onSubmit = handleSubmit((data) => {
    const gender: any = document.getElementById("gender");
    const age: any = document.getElementById("age");
    if (callback) {
      callback({
        gender: gender.value,
        age: age.value,
      });
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <DefaultInput
        id="gender"
        type="text"
        name="gender"
        label="Gender"
        placeholder="Gender"
        required={true}
      />
      <DefaultInput
        id="age"
        type="number"
        name="age"
        label="Age"
        placeholder="Age"
        required={true}
      />
      <Button
        className="mt-4 transform duration-200 py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 focus:outline-none disabled:opacity-50 focus:translate-y-1 hover:-translate-y-1"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};
