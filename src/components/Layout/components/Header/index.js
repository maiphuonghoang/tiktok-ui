import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
//bind giúp trả ra 1 method giúp viết css dưới dạng dấu gạch ngang
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}></div>
    </header>
  );
}

export default Header;
