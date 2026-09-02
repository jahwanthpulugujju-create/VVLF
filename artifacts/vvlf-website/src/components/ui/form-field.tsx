import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextarea?: boolean;
  rows?: number;
  error?: string;
  hint?: string;
}

export const FormField = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, FormFieldProps>(
  ({ label, isTextarea = false, rows = 4, error, hint, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1.5 w-full">
        <label className="text-sm font-semibold text-[#0B0F19] flex justify-between">
          <span>{label}</span>
          {props.required && <span className="text-rose-500 font-normal text-xs">* Required</span>}
        </label>
        {isTextarea ? (
          <Textarea
            ref={ref as any}
            rows={rows}
            className={`w-full rounded-xl border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]/10 transition-all ${
              error ? "border-rose-400 focus:border-rose-500" : ""
            } ${className}`}
            {...(props as any)}
          />
        ) : (
          <Input
            ref={ref as any}
            className={`w-full rounded-xl border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]/10 transition-all h-11 ${
              error ? "border-rose-400 focus:border-rose-500" : ""
            } ${className}`}
            {...props}
          />
        )}
        {error && <p className="text-xs font-medium text-rose-500 mt-1">{error}</p>}
        {hint && !error && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
      </div>
    );
  }
);
FormField.displayName = "FormField";
