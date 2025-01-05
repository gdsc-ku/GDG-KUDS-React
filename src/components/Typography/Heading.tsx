/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';

type Level = 1 | 2 | 3 | 4 | 5;

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: Level;
}

const prefixCls = `${PREFIX_CLS}-heading`;

const Heading = ({ level, className, ...headingProps }: HeaderProps) => {
  const headingCls = clsx(`${prefixCls}-h${level}`, className);

  const headingTag = `h${level}` as const;
  return jsx(headingTag, { ...headingProps, className: headingCls, css: HeadingStyle });
};

export default Heading;

const HeadingStyle = css({
  [`&.${prefixCls}-h1`]: {
    fontSize: 56,
    lineHeight: '64px',
  },
  [`&.${prefixCls}-h2`]: {
    fontSize: 40,
    lineHeight: '52px',
  },
  [`&.${prefixCls}-h3`]: {
    fontSize: 32,
    lineHeight: '44px',
  },
  [`&.${prefixCls}-h4`]: {
    fontSize: 24,
    lineHeight: '34px',
  },
  [`&.${prefixCls}-h5`]: {
    fontSize: 20,
    lineHeight: '28px',
  },
});
