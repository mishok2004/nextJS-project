import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebsr/Sidebar';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';
import { AppContextProvider, IAppContext } from '../context/app.context';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} children={undefined} />
      <Sidebar className={styles.sidebar} children={undefined} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} children={undefined} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
