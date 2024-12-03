/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';

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
const INPUT_PREFIX = `${GLOBAL_PREFIX}-input`;
const generateInputCls = generateClasses(INPUT_PREFIX);

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

  return (
    <div css={InputContainerStyles} className={generateInputCls(['container', status, className])}>
      {label && <label className={generateInputCls(['label'])}>{label}</label>}
      <div className={generateInputCls(['wrapper'])}>
        <input
          ref={ref}
          type={type}
          className={generateInputCls([colorType, 'inner', { disabled: inputProps.disabled }, size])}
          {...inputProps}
        />
        {icon && <span className={generateInputCls(['icon'])}>{icon}</span>}
        {/* success icon, error icon 추가 */}
      </div>

      {helpText && <p className={generateInputCls(['helptext'])}>{helpText}</p>}
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

  '&:focus': {
    outline: 'none',
    color: Colors.primary[800],
    borderColor: Colors.primary[800],
  }, //input focus

  [`&.${INPUT_PREFIX}-small`]: {
    width: 200,
    height: 14,
  },
  [`&.${INPUT_PREFIX}-medium`]: {
    width: 260,
    height: 24,
  },

  [`&.${INPUT_PREFIX}-disabled`]: {
    backgroundColor: Colors.primary[200],
    borderColor: Colors.primary[300],

    cursor: 'not-allowed',
  },
});

const WrapperStyles = css({
  position: 'relative',

  [`> input.${INPUT_PREFIX}-inner`]: InputDefaultStyles,

  //icon scss로 수정 아이콘에 className을 만들어서 바로 적용
  //추후 icon 전체 업데이트
  [`> span.${INPUT_PREFIX}-icon`]: {
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

  [`> label.${INPUT_PREFIX}-label`]: LabelStyles,
  [`> div.${INPUT_PREFIX}-wrapper`]: WrapperStyles,
  [`> p.${INPUT_PREFIX}-helptext`]: HelpTextSyles,

  [`&.${INPUT_PREFIX}-default`]: {
    color: Colors.primary[700],
    [`> div.${INPUT_PREFIX}-wrapper > input.${INPUT_PREFIX}-inner`]: {
      borderColor: Colors.primary[500],
    },
  },

  [`&.${INPUT_PREFIX}-success`]: {
    color: Colors.green[500],
    [`> div.${INPUT_PREFIX}-wrapper > input.${INPUT_PREFIX}-inner`]: {
      borderColor: Colors.green[500],
    },
  },

  [`&.${INPUT_PREFIX}-error`]: {
    color: Colors.red[500],
    [`> div.${INPUT_PREFIX}-wrapper > input.${INPUT_PREFIX}-inner`]: {
      borderColor: Colors.red[500],
    },
  },
});
