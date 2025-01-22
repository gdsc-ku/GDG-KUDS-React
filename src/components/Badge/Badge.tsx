/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';

type ColorType = 'primary' | 'white' | 'blue' | 'green' | 'yellow' | 'red';
type Size = 'sm' | 'md';

export interface BadgeProps extends React.ButtonHTMLAttributes<HTMLSpanElement> {
  colorType?: ColorType;
  // light?: 'light' | 'bold';
  size?: Size;
}

const prefixCls = `${PREFIX_CLS}-label`;

const Badge = (props: BadgeProps) => {
  const { colorType, size = 'sm', className, ...labelProps } = props;

  const labelCls = clsx(
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
      [`${prefixCls}-${size}`]: !!size,
    },
    className,
  );

  return <span className={labelCls} css={BadgeStyle} {...labelProps} />;
};

export default Badge;

const BadgeStyle = css(
  {
    padding: '0px 10px',

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    fontSize: 12,
    fontWeight: 500,
    lineHeight: '22px',

    color: 'var(--primary-800)',
    backgroundColor: 'var(--primary-300)',

    border: 'none',
    borderRadius: 100,

    [`&.${prefixCls}-white`]: {
      color: 'var(--primary-100)',
      backgroundColor: 'var(--primary-600)',
    },

    [`&.${prefixCls}-md`]: {
      padding: '2px 12px',

      fontSize: 14,
    },
  },
  ['blue', 'green', 'yellow', 'red'].map((colorType) =>
    css({
      [`&.${prefixCls}-${colorType}`]: {
        color: `var(--${colorType}-500)`,
        backgroundColor: `var(--${colorType}-100)`,
      },
    }),
  ),
);

// const LabelColorTypeStyles = {
//   primary - light: primary_GR1, bold: primary_BK
//   white - light: primary_GR2, bold: primary_WH  로 생각하고 만들었습니다.
//   primary: {
//     light: css({
//       backgroundColor: 'var(--primary-300)',
//       color: 'var(--primary-800)',
//     }),
//     bold: css({
//       backgroundColor: 'var(--primary-800)',
//       color: 'var(--primary-100)',
//     }),
//   },
//   white: {
//     light: css({
//       backgroundColor: 'var(--primary-600)',
//       color: 'var(--primary-100)',
//     }),
//     bold: css({
//       backgroundColor: 'var(--primary-200)',
//       color: 'var(--primary-800)',
//     }),
//   },
//   blue: {
//     light: css({
//       backgroundColor: 'var(--blue-100)',
//       color: 'var(--blue-500)',
//     }),
//     bold: css({
//       backgroundColor: 'var(--blue-500)',
//       color: 'var(--primary-100)',
//     }),
//   },
//   green: {
//     light: css({
//       backgroundColor: 'var(--green-100)',
//       color: 'var(--green-500)',
//     }),
//     bold: css({
//       backgroundColor: 'var(--green-500)',
//       color: 'var(--primary-100)',
//     }),
//   },
//   yellow: {
//     light: css({
//       backgroundColor: 'var(--yellow-100)',
//       color: 'var(--yellow-500)',
//     }),
//     bold: css({
//       backgroundColor: 'var(--yellow-500)',
//       color: 'var(--primary-100)',
//     }),
//   },
//   red: {
//     light: css({
//       backgroundColor: 'var(--red-100)',
//       color: 'var(--red-500)',
//     }),
//     bold: css({
//       backgroundColor: 'var(--red-500)',
//       color: 'var(--primary-100)',
//     }),
//   },
// };
//
// const getLabelColorStyles = (colorType: ColorType = 'primary', light: 'light' | 'bold' = 'light') => {
//   return LabelColorTypeStyles[colorType][light];
// };
