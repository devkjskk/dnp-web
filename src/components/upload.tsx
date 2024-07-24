"use client";

import React, { useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useFieldArray } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

import { FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import Link from "next/link";

type UploadFieldProps = {
  label?: string;
  name: string;
  placeholder?: string;
  control: any;
  viewOnly?: boolean;
};

export const UploadField = ({
  label,
  name,
  placeholder = "Upload your files here",
  control,
  viewOnly,
}: UploadFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });
  const getFullUrl = (filename: string) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/attachments/${filename}`;
  };

  const renderFileTypes = (file: any, isLocalFile = false) => {
    let fileType = isLocalFile ? file.type : file.mimetype;
    let fileName = isLocalFile ? file.name : file.filename;

    if (fileType.match(/image\/*/)) {
      return (
        <Link href={getFullUrl(fileName)} target="_blank">
          <Image
            alt="file"
            src={isLocalFile ? URL.createObjectURL(file) : getFullUrl(fileName)}
            width={200}
            height={200}
            className="rounded-lg w-24 h-24 transition hover:scale-110 duration-300 ease-in-out cursor-pointer"
          />
        </Link>
      );
    }

    return (
      <Link href={getFullUrl(fileName)} target="_blank">
        <div className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-lg cursor-pointer">
          <FaRegFileAlt className="text-3xl text-secondary" />
        </div>
      </Link>
    );
  };

  const handleClick = () => {
    if (inputRef?.current) {
      inputRef.current.click();
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel>{label}</FormLabel>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            {fields.map((field: any, index) => (
              <div key={field.id} className="relative">
                {field.file
                  ? renderFileTypes(field.file, true)
                  : renderFileTypes(field, false)}
                {!viewOnly && (
                  <Button
                    className="absolute top-[-6px] right-[-6px] text-secondary bg-white p-0 rounded-full w-7 h-7"
                    type="button"
                    variant="outline"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <MdClose />
                  </Button>
                )}
              </div>
            ))}
            {!viewOnly && (
              <>
                <input
                  type="file"
                  ref={inputRef}
                  multiple
                  hidden
                  onChange={(event) => {
                    if (!event.target.files) return;

                    const uploadedFiles = Array.from(event.target.files);
                    const files = uploadedFiles.map((file) => ({ file }));

                    append(files);
                  }}
                />
                <button
                  type="button"
                  className="w-24 h-24 border-2 border-dotted rounded-lg text-secondary text-sm font-light"
                  onClick={handleClick}
                >
                  {placeholder}
                </button>
              </>
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

UploadField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
};

export default UploadField;
