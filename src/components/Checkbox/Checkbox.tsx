/** @jsxImportSource @emotion/react */

import IconCheck from '../../icons/check';
import React from 'react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';
import { css } from '@emotion/react';

type BaseCheckboxAttribute = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'maxlength' | 'minlength' | 'multiple'
>;

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface CheckboxProps extends BaseCheckboxAttribute {
  colorType?: ColorType;
  labelStyle?: React.CSSProperties;
}

const prefixCls = `${PREFIX_CLS}-checkbox`;

const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const { colorType, name, labelStyle, className, children, ...checkboxProps } = props;
  const { disabled, checked } = checkboxProps;

  const wrapperCls = clsx(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-checked`]: checked,
    },
    className,
  );

  const checkboxCls = clsx(prefixCls, {
    [`${prefixCls}-${colorType}`]: colorType !== 'primary',
  });

  return (
    <label ref={ref} htmlFor={name} className={wrapperCls} style={labelStyle} css={WrapperStyle}>
      <span className={checkboxCls} css={CheckboxStyle}>
        <input type='checkbox' id={name} className={`${prefixCls}-input`} {...checkboxProps} />
        <span className={`${prefixCls}-inner`}>
          <IconCheck className={clsx(`${prefixCls}-icon`, `${prefixCls}-icon-check`)} />
        </span>
      </span>
      {children && (
        <span className={`${prefixCls}-helper`} css={HelperStyle}>
          {children}
        </span>
      )}
    </label>
  );
});

export default Checkbox;

const WrapperStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,

  cursor: 'pointer',

  [`&.${prefixCls}-checked > .${prefixCls}`]: {
    backgroundColor: 'var(--primary-700)',

    [`&.${prefixCls}-blue`]: {
      backgroundColor: 'var(--blue-500)',
      borderColor: 'var(--blue-500)',
    },

    [`&.${prefixCls}-green`]: {
      backgroundColor: 'var(--green-500)',
      borderColor: 'var(--green-500)',
    },
    [`&.${prefixCls}-yellow`]: {
      backgroundColor: 'var(--yellow-500)',
      borderColor: 'var(--yellow-500)',
    },
    [`&.${prefixCls}-red`]: {
      backgroundColor: 'var(--red-500)',
      borderColor: 'var(--red-500)',
    },

    [`> .${prefixCls}-inner`]: {
      opacity: 1,
    },
  },

  [`&.${prefixCls}-disabled`]: {
    cursor: 'not-allowed',

    [`> .${prefixCls}`]: {
      backgroundColor: 'var(--primary-200)',

      [`&.${prefixCls}-blue`]: {
        borderColor: 'var(--blue-100)',
      },
      [`&.${prefixCls}-green`]: {
        borderColor: 'var(--green-100)',
      },
      [`&.${prefixCls}-yellow`]: {
        borderColor: 'var(--yellow-100)',
      },
      [`&.${prefixCls}-red`]: {
        borderColor: 'var(--red-100)',
      },
    },

    [`> .${prefixCls}-helper`]: {
      color: 'var(--primary-400)',
    },
  },
});

const CheckboxStyle = css({
  position: 'relative',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 12,
  height: 12,

  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'var(--primary-700)',
  borderRadius: 4,

  transitionProperty: 'all',
  transitionDuration: '100ms',
  transitionTimingFunction: 'ease-out',

  [`&.${prefixCls}-blue`]: {
    borderColor: 'var(--blue-300)',
  },

  [`&.${prefixCls}-green`]: {
    borderColor: 'var(--green-300)',
  },

  [`&.${prefixCls}-yellow`]: {
    borderColor: 'var(--yellow-300)',
  },

  [`&.${prefixCls}-red`]: {
    borderColor: 'var(--red-300)',
  },

  [`> .${prefixCls}-input`]: {
    position: 'absolute',
    inset: 0,

    margin: 0,
    padding: 0,

    opacity: 0,
  },

  [`> .${prefixCls}-inner`]: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    opacity: 0,
  },
});

const HelperStyle = css({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '8px',
  color: 'var(--primary-800)',
});
