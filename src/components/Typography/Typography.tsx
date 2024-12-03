/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { generateClasses } from '../../utils';

type Weight = 'regular' | 'medium' | 'semiBold' | 'bold';
type Size = 'md' | 'sm';

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  weight?: Weight;
  size?: Size;
}

const TYPOGRAPHY_PREFIX = `${GLOBAL_PREFIX}-typography`;
const generateTypoCls = generateClasses(TYPOGRAPHY_PREFIX);

const Typography = ({ weight = 'regular', size = 'sm', className, ...typographyProps }: TypographyProps) => {
  const typographyCls = generateTypoCls([weight, size], className);

  return <p {...typographyProps} className={typographyCls} css={TypographyStyle} />;
};

export default Typography;

const Weight = {
  [`&.${TYPOGRAPHY_PREFIX}-regular`]: {
    fontWeight: 400,
  },

  [`&.${TYPOGRAPHY_PREFIX}-medium`]: {
    fontWeight: 500,
  },

  [`&.${TYPOGRAPHY_PREFIX}-semiBold`]: {
    fontWeight: 600,
  },

  [`&.${TYPOGRAPHY_PREFIX}-bold`]: {
    fontWeight: 700,
  },
};

const TypographyStyle = css({
  ...Weight,
  [`&.${TYPOGRAPHY_PREFIX}-sm`]: {
    fontSize: 14,
    lineHeight: '22px',
  },

  [`&.${TYPOGRAPHY_PREFIX}-md`]: {
    fontSize: 16,
    lineHeight: '24px',
  },
});
