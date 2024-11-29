/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { generateClasses } from '../../utils';
import { Colors } from '../../constants/colors';

type BaseCheckboxAttribute = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'maxlength' | 'minlength' | 'multiple'
>;

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface CheckboxProps extends BaseCheckboxAttribute {
  colorType?: ColorType;
  labelStyle?: React.CSSProperties;
}

const CHECKBOX_PREFIX = `${GLOBAL_PREFIX}-checkbox`;
const generateCheckboxCls = generateClasses(CHECKBOX_PREFIX);

/**
 * TODO: 체크 아이콘 추가
 */
const Checkbox = ({ colorType, name, labelStyle, className, children, ...checkboxProps }: CheckboxProps) => {
  return (
    <label htmlFor={name} className={generateCheckboxCls(['wrapper'])} css={CheckboxWrapperStyle} style={labelStyle}>
      <span
        className={generateCheckboxCls([
          colorType,
          {
            disabled: checkboxProps.disabled,
            checked: checkboxProps.checked,
          },
          className,
        ])}
        css={CheckboxStyle}>
        <input type='checkbox' id={name} className={generateCheckboxCls(['input'])} {...checkboxProps} />
        <span className={generateCheckboxCls(['inner'])} />
      </span>
      {children && <span className={generateCheckboxCls(['help'])}>{children}</span>}
    </label>
  );
};

export default Checkbox;

const CheckboxWrapperStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
});

const InputStyle = css({
  [`&.${CHECKBOX_PREFIX}-input`]: {
    position: 'absolute',
    inset: 0,

    margin: 0,
    padding: 0,

    opacity: 0,
  },
});

const CheckedStyle = css({
  backgroundColor: Colors.primary[700],

  [`&.${CHECKBOX_PREFIX}-blue`]: {
    backgroundColor: Colors.blue[500],
  },

  [`&.${CHECKBOX_PREFIX}-green`]: {
    backgroundColor: Colors.green[500],
  },
  [`&.${CHECKBOX_PREFIX}-yellow`]: {
    backgroundColor: Colors.yellow[500],
  },
  [`&.${CHECKBOX_PREFIX}-red`]: {
    backgroundColor: Colors.red[500],
  },
});

const DisabledStyle = css({
  backgroundColor: Colors.primary[200],
  cursor: 'not-allowed',

  [`&.${CHECKBOX_PREFIX}-blue`]: {
    borderColor: Colors.blue[100],
  },

  [`&.${CHECKBOX_PREFIX}-green`]: {
    borderColor: Colors.green[100],
  },
  [`&.${CHECKBOX_PREFIX}-yellow`]: {
    borderColor: Colors.yellow[100],
  },
  [`&.${CHECKBOX_PREFIX}-red`]: {
    borderColor: Colors.red[100],
  },
});

const InnerCheckboxStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '100%',

  ['&::after']: {
    content: '""',
    // how to insert check icon?
  },
});

const CheckboxStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  width: 12,
  height: 12,

  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: Colors.primary[700],
  borderRadius: 4,

  transitionProperty: 'background-color, border-color',
  transitionDuration: '100ms',
  transitionTimingFunction: 'ease-out',

  [`&.${CHECKBOX_PREFIX}-blue`]: {
    borderColor: Colors.blue[300],
  },

  [`&.${CHECKBOX_PREFIX}-green`]: {
    borderColor: Colors.green[300],
  },
  [`&.${CHECKBOX_PREFIX}-yellow`]: {
    borderColor: Colors.yellow[300],
  },
  [`&.${CHECKBOX_PREFIX}-red`]: {
    borderColor: Colors.red[300],
  },

  [`&.${CHECKBOX_PREFIX}-checked`]: CheckedStyle,
  [`&.${CHECKBOX_PREFIX}-disabled`]: DisabledStyle,

  [`& > input.${CHECKBOX_PREFIX}-input`]: InputStyle,
  [`& > span.${CHECKBOX_PREFIX}-inner`]: InnerCheckboxStyle,
});
