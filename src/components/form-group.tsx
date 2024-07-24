"use client";

type FormGroupProps = {
  title: string;
  children: React.ReactNode;
};

export const FormGroup = ({ title, children }: FormGroupProps) => {
  return (
    <div className="space-y-3">
      <div className="text-md font-bold mb-2">{title}</div>
      {children}
    </div>
  );
};

export default FormGroup;
