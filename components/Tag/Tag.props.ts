import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: 'm' | 'l';
  href?: string;
  color: 'ghost' | 'red' | 'grey' | 'primary' | 'green';
  children: ReactNode;
}
