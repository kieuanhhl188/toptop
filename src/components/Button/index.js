import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

// to: link nội bộ, href: link ngoài, onClick, passProps: Các prop thêm vào
function Button({
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    rounded = false,
    disabled = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button'; // mặc định là thẻ button
    const props = {
        onClick,
        ...passProps,
    };

    // xóa event listener khi button disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
        // delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        text,
        primary,
        outline,
        small,
        large,
        disabled,
        rounded,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {/* Thêm ther span để khi thêm icon ở trc hoặc sau để dễ xử lý hơn */}
            <span className={cx('title')}>{children}</span>
        
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
