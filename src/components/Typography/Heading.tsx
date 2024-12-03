/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { generateClasses } from '../../utils';

type Level = 1 | 2 | 3 | 4 | 5;

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: Level;
}

const HEADING_PREFIX = `${GLOBAL_PREFIX}-heading`;
const generateHeadingCls = generateClasses(HEADING_PREFIX);

const Heading = ({ level, className, ...headingProps }: HeaderProps) => {
  const headingCls = generateHeadingCls([level], className);

  const headingTag = `h${level}` as const;
  return jsx(headingTag, { ...headingProps, className: headingCls, css: HeadingStyle });
};

export default Heading;

const HeadingStyle = css({
  [`&.${HEADING_PREFIX}-1`]: {
    fontSize: 56,
    lineHeight: '64px',
  },
  [`&.${HEADING_PREFIX}-2`]: {
    fontSize: 40,
    lineHeight: '52px',
  },
  [`&.${HEADING_PREFIX}-3`]: {
    fontSize: 32,
    lineHeight: '44px',
  },
  [`&.${HEADING_PREFIX}-4`]: {
    fontSize: 24,
    lineHeight: '34px',
  },
  [`&.${HEADING_PREFIX}-5`]: {
    fontSize: 20,
    lineHeight: '28px',
  },
});
