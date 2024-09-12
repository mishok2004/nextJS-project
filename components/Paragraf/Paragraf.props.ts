import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ParagrafProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size: 'm' | 'l' | 'xl';
  children: ReactNode;
}
