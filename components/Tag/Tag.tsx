import { ParagrafProps } from './Tag.props';
import styles from './Paragraf.module.css';

export const Paragraf = ({
  size = 'l',
  children,
}: ParagrafProps): JSX.Element => {
  switch (size) {
    case 'm':
      return <p className={styles.m}>{children}</p>;
    case 'l':
      return <p className={styles.l}>{children}</p>;
    case 'xl':
      return <p className={styles.xl}>{children}</p>;
    default:
      return <p className={styles.l}>{children}</p>;
  }
};
