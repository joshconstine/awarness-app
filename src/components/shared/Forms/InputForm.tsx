import { Button, FormControl, FormGroup } from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { DefaultInput } from "./DefaultInput";
import { InputFormStyles } from "./InputformStyle";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email" | "number";
export type DefaultInputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  placeholder?: string;
  callback?: (data: { gender: string; age: number }) => void;
};

export type InputFormFields = {
  gender: string;
};

export const InputForm = (props: {
  forms: DefaultInputProps[];
  callback: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormFields>();

  const { callback } = props;

  const onSubmit = handleSubmit((data) => {
    console.log("click");
    if (callback) {
      callback();
    }
  });
  return (
    <FormControl onSubmit={onSubmit} style={InputFormStyles}>
      {props.forms.map((form) => {
        return (
          <DefaultInput
            key={form.id}
            id={form.id}
            type={form.type}
            name={form.name}
            label={form.label}
            placeholder={form.placeholder}
            required={true}
          />
        );
      })}

      <Button
        className="mt-4 transform duration-200 py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 focus:outline-none disabled:opacity-50 focus:translate-y-1 hover:-translate-y-1"
        type="submit"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </FormControl>
  );
};
