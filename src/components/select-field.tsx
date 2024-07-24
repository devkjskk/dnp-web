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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues } from "react-hook-form";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = FieldValues & {
  label?: string;
  description?: string;
  name: string;
  placeholder?: string;
  options: SelectOption[];
  required?: boolean;
};

export const SelectField = ({
  label,
  description,
  name,
  placeholder,
  control,
  options,
  required,
}: SelectFieldProps) => {
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
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  description: PropTypes,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectField;
