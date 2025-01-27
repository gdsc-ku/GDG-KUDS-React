/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';
import { PREFIX_CLS } from '../ConfigProvider/context';

type ColorType = 'primary'; //colorType 별도 명시
type Size = 'small' | 'medium';
type Status = 'default' | 'success' | 'error';

type InputAttribute = React.InputHTMLAttributes<HTMLInputElement>;
export interface InputProps extends Omit<InputAttribute, 'size'> {
  colorType?: ColorType;
  size?: Size;
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  placeholder?: string;
  status?: Status;
  icon?: React.ReactNode;
}

const prefixCls = `${PREFIX_CLS}-checkbox`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    colorType,
    type,
    size = 'small',
    label,
    helpText,
    status = 'default',
    className,
    icon,
    ...inputProps
  } = props;

  const containerCls = clsx(`${prefixCls}-container`, `${prefixCls}-${status}`, className);

  const inputCls = clsx(`${prefixCls}-inner`, `${prefixCls}-${colorType}`, `${prefixCls}-${size}`, {
    [`${prefixCls}-disabled`]: inputProps.disabled,
  });

  return (
    <div css={InputContainerStyles} className={containerCls}>
      {label && <label className={`${prefixCls}-label`}>{label}</label>}
      <div className={`${prefixCls}-wrapper`}>
        <input ref={ref} type={type} className={inputCls} {...inputProps} />
        {icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
        {/* success icon, error icon 추가 */}
      </div>
      {helpText && <p className={`${prefixCls}-helptext`}>{helpText}</p>}
    </div>
  );
});

export default Input;

const LabelStyles = css({
  fontSize: 12,
  fontWeight: 500,
  color: Colors.primary[800],
  marginBottom: 2, //피그마 기반 수정
});

const HelpTextSyles = css({
  fontSize: 10,
  fontWeight: 300,
  marginTop: 5, //피그마 기반 수정
});

const InputDefaultStyles = css({
  padding: '10px 20px',
  fontsize: 14,

  display: 'inline-flex',
  alignItems: 'center',

  border: '1.2px solid',
  borderRadius: 8,
  backgroundColor: Colors.primary[100],

  cursor: 'text',

  [`&.${prefixCls}-small`]: {
    width: 200,
    height: 14,
  },
  [`&.${prefixCls}-medium`]: {
    width: 260,
    height: 24,
  },

  [`&.${prefixCls}-disabled`]: {
    backgroundColor: Colors.primary[200],
    borderColor: Colors.primary[300],

    cursor: 'not-allowed',
  },
});

const WrapperStyles = css({
  position: 'relative',

  [`> input.${prefixCls}-inner`]: InputDefaultStyles,

  //icon scss로 수정 아이콘에 className을 만들어서 바로 적용
  //추후 icon 전체 업데이트
  [`> span.${prefixCls}-icon`]: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
}); // icon 적용 이후 수정 예정

const InputContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',

  [`> label.${prefixCls}-label`]: LabelStyles,
  [`> div.${prefixCls}-wrapper`]: WrapperStyles,
  [`> p.${prefixCls}-helptext`]: HelpTextSyles,

  [`&.${prefixCls}-default`]: {
    color: Colors.primary[700],
    [`> div.${prefixCls}-wrapper > input.${prefixCls}-inner`]: {
      borderColor: Colors.primary[500],
      //focus를 이렇게 넣는 것이 맞는지 모르겠음
      '&:focus': {
        transition: 'border-color 0.2s, color 0.2s',
        outline: 'none',
        borderColor: Colors.primary[800],
      },
    },
  },

  [`&.${prefixCls}-success`]: {
    color: Colors.green[500],
    [`> div.${prefixCls}-wrapper > input.${prefixCls}-inner`]: {
      borderColor: Colors.green[500],
      '&:focus': {
        transition: 'border-color 0.2s, color 0.2s',
        outline: 'none',
        borderColor: Colors.primary[800],
      },
    },
  },

  [`&.${prefixCls}-error`]: {
    color: Colors.red[500],
    [`> div.${prefixCls}-wrapper > input.${prefixCls}-inner`]: {
      borderColor: Colors.red[500],
      '&:focus': {
        transition: 'border-color 0.2s, color 0.2s',
        outline: 'none',
        borderColor: Colors.primary[800],
      },
    },
  },
});
