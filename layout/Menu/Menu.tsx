import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { useContext } from 'react';

import { Tag } from '../../components';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((el) => (
          <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
