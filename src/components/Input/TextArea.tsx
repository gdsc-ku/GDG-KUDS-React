/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';
import { PREFIX_CLS } from '../ConfigProvider/context';

type Size = 'large';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: Size;
  label?: React.ReactNode;
  placeholder?: string;
}

const prefixCls = `${PREFIX_CLS}-textarea`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { size = 'large', label, className, ...textAreaProps } = props;
  const { disabled } = textAreaProps;

  const containerCls = clsx(`${prefixCls}-container`, className);
  const textareaCls = clsx(`${prefixCls}-inner`, `${prefixCls}-${size}`, {
    [`${prefixCls}-disabled`]: disabled,
  });

  return (
    <div css={TextAreaContainerStyles} className={containerCls}>
      {label && <label className={`${prefixCls}-label`}>{label}</label>}
      <textarea ref={ref} className={textareaCls} {...textAreaProps}></textarea>
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

  [`&.${prefixCls}-large`]: {
    width: 660,
    height: 280,
  },

  [`&.${prefixCls}-disabled`]: {
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

  [`> label.${prefixCls}-label`]: LabelStyles,
  [`> textarea.${prefixCls}-inner`]: TextAreaDefaultStyles,
});
