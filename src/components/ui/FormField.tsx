"use client";

import { Check } from "lucide-react";

type InputFieldProps = {
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

type SelectFieldProps = {
  label: string;
  options: string[];
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

type TextAreaFieldProps = {
  label: string;
  rows?: number;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
};

type CheckboxFieldProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
};

type RadioGroupFieldProps = {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  columns?: 1 | 2 | 3;
};

type CheckboxGroupFieldProps = {
  label: string;
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
  required?: boolean;
  columns?: 1 | 2 | 3;
};

const baseInputStyles =
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-text-body placeholder:text-text-muted/50 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all text-sm";

export function InputField({
  label,
  type = "text",
  required,
  name,
  value,
  onChange,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-body font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        className={baseInputStyles}
      />
    </div>
  );
}

export function SelectField({
  label,
  options,
  required,
  name,
  value,
  onChange,
  placeholder,
}: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-body font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={baseInputStyles}
      >
        <option value="">{placeholder ?? "—"}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({
  label,
  rows = 4,
  required,
  name,
  value,
  onChange,
  maxLength,
  placeholder,
}: TextAreaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-body font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`${baseInputStyles} resize-none`}
      />
      {maxLength != null && (
        <p className="mt-1 text-xs text-text-muted text-right">
          {value?.length ?? 0} / {maxLength}
        </p>
      )}
    </div>
  );
}

export function CheckboxField({
  label,
  checked,
  onChange,
  description,
}: CheckboxFieldProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
          checked
            ? "border-accent bg-accent text-white"
            : "border-border bg-white group-hover:border-accent/50"
        }`}
      >
        {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
      </span>
      <span>
        <span className="text-sm font-body font-medium text-text-primary">
          {label}
        </span>
        {description && (
          <span className="block text-xs text-text-muted mt-0.5">
            {description}
          </span>
        )}
      </span>
    </label>
  );
}

export function RadioGroupField({
  label,
  options,
  value,
  onChange,
  required,
  columns = 1,
}: RadioGroupFieldProps) {
  const gridCols =
    columns === 3
      ? "grid-cols-3"
      : columns === 2
        ? "grid-cols-2"
        : "grid-cols-1";

  return (
    <fieldset>
      <legend className="block text-sm font-body font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </legend>
      <div className={`grid ${gridCols} gap-2`}>
        {options.map((opt) => {
          const selected = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`border rounded-lg px-4 py-3 text-sm font-body text-left cursor-pointer transition ${
                selected
                  ? "border-accent bg-accent/5 text-text-primary"
                  : "border-border bg-white text-text-body hover:border-accent/50"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function CheckboxGroupField({
  label,
  options,
  values,
  onChange,
  required,
  columns = 2,
}: CheckboxGroupFieldProps) {
  const gridCols =
    columns === 3
      ? "grid-cols-3"
      : columns === 2
        ? "grid-cols-2"
        : "grid-cols-1";

  function toggle(optValue: string) {
    if (values.includes(optValue)) {
      onChange(values.filter((v) => v !== optValue));
    } else {
      onChange([...values, optValue]);
    }
  }

  return (
    <fieldset>
      <legend className="block text-sm font-body font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </legend>
      <div className={`grid ${gridCols} gap-2`}>
        {options.map((opt) => {
          const checked = values.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              className={`flex items-center gap-2 border rounded-lg px-4 py-3 text-sm font-body text-left cursor-pointer transition ${
                checked
                  ? "border-accent bg-accent/5 text-text-primary"
                  : "border-border bg-white text-text-body hover:border-accent/50"
              }`}
            >
              <span
                className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border transition-all ${
                  checked
                    ? "border-accent bg-accent text-white"
                    : "border-border bg-white"
                }`}
              >
                {checked && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
