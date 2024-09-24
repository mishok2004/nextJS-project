import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HederProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
