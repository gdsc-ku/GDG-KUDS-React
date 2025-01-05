/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';

type Weight = 'regular' | 'medium' | 'semiBold' | 'bold';
type Size = 'md' | 'sm';

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  weight?: Weight;
  size?: Size;
}

const prefixCls = `${PREFIX_CLS}-typography`;

const Typography = ({ weight, size, className, ...typographyProps }: TypographyProps) => {
  const typographyCls = clsx(
    {
      [`${prefixCls}-${weight}`]: !!weight,
      [`${prefixCls}-${size}`]: !!size,
    },
    className,
  );

  return <p className={typographyCls} css={TypographyStyle} {...typographyProps} />;
};

export default Typography;

const TypographyStyle = css({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '22px',

  [`&.${prefixCls}-md`]: {
    fontSize: 16,
    lineHeight: '24px',
  },

  [`&.${prefixCls}-medium`]: {
    fontWeight: 500,
  },

  [`&.${prefixCls}-semiBold`]: {
    fontWeight: 600,
  },

  [`&.${prefixCls}-bold`]: {
    fontWeight: 700,
  },
});
