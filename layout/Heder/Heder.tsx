import { HederProps } from './Heder.props';
import styles from './Heder.module.css';

export const Heder = ({ ...props }: HederProps): JSX.Element => {
  return <div {...props}>Heder</div>;
};
