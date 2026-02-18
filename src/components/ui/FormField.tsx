"use client";

type InputFieldProps = {
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
};

type SelectFieldProps = {
  label: string;
  options: string[];
  required?: boolean;
};

type TextAreaFieldProps = {
  label: string;
  rows?: number;
  required?: boolean;
};

const baseInputStyles =
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-text-body placeholder:text-text-muted/50 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all text-sm";

export function InputField({ label, type = "text", required }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-accent font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input type={type} className={baseInputStyles} />
    </div>
  );
}

export function SelectField({ label, options, required }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-accent font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <select className={baseInputStyles}>
        <option value="">—</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({ label, rows = 4, required }: TextAreaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-accent font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <textarea rows={rows} className={`${baseInputStyles} resize-none`} />
    </div>
  );
}
