/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef } from 'react';
import { PREFIX_CLS } from '../ConfigProvider/context';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';
type Size = 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: ColorType;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
}

const prefixCls = `${PREFIX_CLS}-btn`;

/**
 * TODO: 로딩 아이콘 추가
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { colorType, size, loading, icon, className, children, ...buttonProps } = props;
  const { disabled } = buttonProps;

  const buttonCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
      [`${prefixCls}-${size}`]: !!size,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-icon-only`]: !!icon && !children,
    },
    className,
  );

  const icLoadingCls = clsx(`${prefixCls}-icon`, `${prefixCls}-icon-loading`);

  return (
    <button
      ref={ref}
      className={buttonCls}
      css={ButtonStyle}
      onClick={(e) => {
        // loading 동안 클릭 이벤트 발생 안하도록
        if (loading) {
          e.preventDefault();
          return;
        }

        buttonProps.onClick?.(e);
      }}
      {...buttonProps}>
      {loading && <span className={icLoadingCls}>loading</span>}
      {!loading && icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
      {!loading && children && <span className={`${prefixCls}-inner`}>{children}</span>}
    </button>
  );
});

export default Button;

const DefaultStyle = css({
  padding: '14px 20px',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  height: 48,

  backgroundColor: 'var(--primary-800)',
  color: 'var(--primary-100)',

  border: 'none',
  borderRadius: 300,

  transitionProperty: 'background-color, color',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-in-out',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'var(--primary-200)',
    color: 'var(--primary-800)',
  },
  '&:active': {
    backgroundColor: 'var(--primary-300)',
    color: 'var(--primary-800)',
  },

  '&:disabled': {
    backgroundColor: 'var(--primary-400)',
    color: 'var(--primary-100)',

    cursor: 'not-allowed',

    '&:hover, &:active': {
      backgroundColor: 'var(--primary-400)',
      color: 'var(--primary-100)',
    },
  },
});

const ColorTypeStyle = css({
  [`&.${prefixCls}-blue`]: {
    backgroundColor: 'var(--blue-500)',
    color: 'var(--primary-100)',
    '&:hover': {
      backgroundColor: 'var(--blue-100)',
    },
    '&:active': {
      backgroundColor: 'var(--blue-300)',
    },
  },
  [`&.${prefixCls}-green`]: {
    backgroundColor: 'var(--green-500)',
    color: 'var(--primary-100)',

    '&:hover': {
      backgroundColor: 'var(--green-100)',
    },
    '&:active': {
      backgroundColor: 'var(--green-300)',
    },
  },
  [`&.${prefixCls}-yellow`]: {
    color: 'var(--primary-100)',
    backgroundColor: 'var(--yellow-500)',
    '&:hover': {
      backgroundColor: 'var(--yellow-100)',
    },
    '&:active': {
      backgroundColor: 'var(--yellow-300)',
    },
  },
  [`&.${prefixCls}-red`]: {
    backgroundColor: 'var(--red-500)',
    color: 'var(--primary-100)',
    '&:hover': {
      backgroundColor: 'var(--red-100)',
    },
    '&:active': {
      backgroundColor: 'var(--red-300)',
    },
  },
});

const SizeStyle = css({
  [`&.${prefixCls}:not(.${prefixCls}-icon-only)`]: {
    minWidth: 120,

    [`&.${prefixCls}-lg`]: {
      width: '100%',
    },
  },

  [`&.${prefixCls}-icon-only`]: {
    padding: 12,
    width: 48,

    span: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: 24,
      height: 24,
    },

    [`&.${prefixCls}-lg`]: {
      padding: '12px 28px',
      width: 80,
    },
  },
});

const ButtonStyle = css(DefaultStyle, ColorTypeStyle, SizeStyle);
