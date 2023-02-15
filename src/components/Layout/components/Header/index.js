import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
const cx = classNames.bind(styles);
//bind giúp trả ra 1 method giúp viết css dưới dạng dấu gạch ngang

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
      </div>
    </header>
  );
}

export default Header;
