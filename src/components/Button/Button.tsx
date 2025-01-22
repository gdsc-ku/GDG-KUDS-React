/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef } from 'react';
import { PREFIX_CLS } from '../ConfigProvider/context';
import { IcLoader } from '../../icons';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';
type Size = 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: ColorType;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
}

const prefixCls = `${PREFIX_CLS}-btn`;

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

  return (
    <button ref={ref} className={buttonCls} css={ButtonStyle} {...buttonProps}>
      {loading && (
        <span className={clsx(`${prefixCls}-icon`, `${prefixCls}-icon-loading`)}>
          <IcLoader />
        </span>
      )}
      {!loading && icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
      {!loading && children && <span className={`${prefixCls}-inner`}>{children}</span>}
    </button>
  );
});

export default Button;

const ButtonStyle = css(
  {
    padding: '14px 20px',

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,

    height: 48,

    border: 'none',
    borderRadius: 300,

    backgroundColor: 'var(--primary-800)',
    color: 'var(--primary-100)',

    cursor: 'pointer',

    transitionProperty: 'background-color, color',
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-in-out',

    '&:hover': {
      backgroundColor: 'var(--primary-200)',
      color: 'var(--primary-800)',
    },
    '&:active': {
      backgroundColor: 'var(--primary-300)',
      color: 'var(--primary-800)',
    },
    '&:disabled': {
      backgroundColor: 'var(--primary-400) !important',
      color: 'var(--primary-100) !important',

      cursor: 'not-allowed',
    },

    [`&.${prefixCls}:not(.${prefixCls}-icon-only)`]: {
      minWidth: 120,

      [`&.${prefixCls}-lg`]: {
        width: '100%',
      },
    },

    [`&.${prefixCls}-icon-only`]: {
      padding: 12,
      width: 48,

      [`&.${prefixCls}-lg`]: {
        padding: '12px 28px',
        width: 80,
      },
    },

    [`> .${prefixCls}-icon`]: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',

      [`&.${prefixCls}-icon-loading > svg`]: {
        animation: 'spin 1.5s linear infinite',

        '@keyframes spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },

        ['path']: {
          stroke: 'var(--primary-100)',
        },
      },
    },
  },
  ['blue', 'green', 'yellow', 'red'].map((colorType) =>
    css({
      [`&.${prefixCls}-${colorType}`]: {
        backgroundColor: `var(--${colorType}-500)`,
        color: `var(--primary-100)`,

        '&:hover': {
          backgroundColor: `var(--${colorType}-100)`,
        },
        '&:active': {
          backgroundColor: `var(--${colorType}-300)`,
        },
      },
    }),
  ),
);
