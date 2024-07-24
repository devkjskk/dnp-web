"use client";

import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { FieldValues } from "react-hook-form";

type InputFieldProps = FieldValues & {
  label?: string;
  description?: string;
  name: string;
  placeholder?: string;
  inputProps?: any;
  required?: boolean;
};

export const InputField = ({
  label,
  description,
  name,
  placeholder,
  control,
  inputProps,
  required,
}: InputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {required ? <span className="text-red-500">*</span> : null}
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} {...inputProps} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  description: PropTypes,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  inputProps: PropTypes.object,
};

export default InputField;
