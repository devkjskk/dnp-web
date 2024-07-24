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
import { FieldValues } from "react-hook-form";
import { Switch } from "./ui/switch";

type SwitchFieldProps = FieldValues & {
  label?: string;
  description?: string;
  name: string;
  switchProps?: any;
};

export const SwitchField = ({
  label,
  description,
  name,
  control,
  switchProps,
}: SwitchFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl>
          <FormItem>
            <div className="flex items-center text-sm space-x-2">
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-readonly
                {...field}
                {...switchProps}
              />
              <FormLabel>{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
            </div>
            <FormMessage />
          </FormItem>
        </FormControl>
      )}
    />
  );
};

SwitchField.propTypes = {
  label: PropTypes.string,
  description: PropTypes,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  switchProps: PropTypes.object,
};

export default SwitchField;
