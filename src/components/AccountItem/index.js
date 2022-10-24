import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13f2a0d585f3cd8578da0d18c36a18c4~c5_300x300.webp?x-expires=1666756800&x-signature=TiVjKX4nYJ5ekN%2B3Wdm2FxgeF7A%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Taylor A Swift</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>taylorswift</span>
            </div>
        </div>
    );
}

export default AccountItem;
