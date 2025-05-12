import type { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number;
  pattern?: string;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}