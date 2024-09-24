import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Heder } from './Heder/Heder';
import { Sidebar } from './Sidebsr/Sidebar';
import { Footer } from './Footer/Footer';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Heder />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
