/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';

type Size = 'large';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: Size;
  label?: React.ReactNode;
  placeholder?: string;
}

const TEXTAREA_PREFIX = `${GLOBAL_PREFIX}-textarea`;
const generateTextAreaCls = generateClasses(TEXTAREA_PREFIX);

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { size = 'large', label, className, ...textAreaProps } = props;

  return (
    <div css={TextAreaContainerStyles} className={generateTextAreaCls(['container', className])}>
      {label && <label className={generateTextAreaCls(['label'])}>{label}</label>}
      <textarea
        ref={ref}
        className={generateTextAreaCls([size, 'inner', { disabled: textAreaProps.disabled }])}
        {...textAreaProps}></textarea>
    </div>
  );
});

export default TextArea;

const LabelStyles = css({
  fontSize: 12,
  fontWeight: 700,
  color: Colors.primary[800],
});

const TextAreaDefaultStyles = css({
  padding: '10px 20px',
  fontsize: 14,

  display: 'inline-flex',
  alignItems: 'center',

  border: '1.2px solid',
  borderRadius: 8,
  borderColor: Colors.primary[500],
  backgroundColor: Colors.primary[100],

  cursor: 'text',

  '&:focus': {
    outline: 'none',
    color: Colors.primary[800],
    borderColor: Colors.primary[800],
  }, //textarea focus

  [`&.${TEXTAREA_PREFIX}-large`]: {
    width: 660,
    height: 280,
  },

  [`&.${TEXTAREA_PREFIX}-disabled`]: {
    backgroundColor: Colors.primary[200],
    borderColor: Colors.primary[300],

    cursor: 'not-allowed',
  }, //textarea disabled
});

const TextAreaContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: '100%',

  [`> label.${TEXTAREA_PREFIX}-label`]: LabelStyles,
  [`> textarea.${TEXTAREA_PREFIX}-inner`]: TextAreaDefaultStyles,
});
