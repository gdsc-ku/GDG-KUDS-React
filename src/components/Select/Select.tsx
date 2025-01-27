/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef, useState } from 'react';
import { Colors } from '../../constants/colors';
import { PREFIX_CLS } from '../ConfigProvider/context';
import IconArrow from '../../icons/arrow';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  colorType?: ColorType;
  width: number;
  options: { value: string; label: string }[];
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const prefixCls = `${PREFIX_CLS}-select`;

const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => {
  const { colorType = '', className, width = 280, ...selectProps } = props;
  const { options, value, placeholder, onChange = () => {} } = selectProps;

  const selectCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
      [`${prefixCls}-${width}`]: !!width,
    },
    className,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange({ target: { value } } as React.ChangeEvent<HTMLSelectElement>);
    setIsOpen(false);
  };

  const selectedOption = options.find((o) => o.value === selectedValue);
  const isSelected = !!selectedValue;

  return (
    <div css={SelectContainerStyles(width, isSelected)} className={selectCls}>
      <button ref={ref} onClick={handleToggle} className={clsx(`${prefixCls}-button`)}>
        <span className={clsx(`${prefixCls}-placeholder`)}>{selectedOption ? selectedOption.label : placeholder}</span>
        <IconArrow className={clsx(`${prefixCls}-icon`)} />
      </button>
      {isOpen && (
        <ul className={clsx(`${prefixCls}-selectbox`)}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={clsx(`${prefixCls}-selectitem`)}
              css={SelectItemsStyles(option.value === selectedValue)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Select;

const SelectStyles = (isSelected: boolean) =>
  css({
    color: Colors.primary[500],

    padding: '11px 16px',
    width: '100%',
    height: 40,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    border: '1px solid',
    borderRadius: 8,

    borderColor: isSelected ? Colors.primary[800] : Colors.primary[500],
    backgroundColor: Colors.primary[100],

    [`> .${prefixCls}-placeholder`]: {
      fontSize: 16,
      fontWeight: 500,
      color: isSelected ? Colors.primary[800] : Colors.primary[500],
    },

    [`> .${prefixCls}-icon`]: {
      width: 16,
      height: 16,

      '&:hover': {
        color: Colors.primary[600],
      },
    },

    '&:hover': {
      borderColor: Colors.primary[800],
      color: Colors.primary[600],
    },
  });

const SelectBoxStyles = css({
  position: 'absolute', // 버튼 아래에 위치
  top: '100%', // 버튼 바로 아래에 배치
  left: 0,

  width: '100%',

  backgroundColor: Colors.primary[100],
  borderRadius: 8,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',

  zIndex: 10,
  minHeight: 80,
  maxHeight: 300,
  overflowY: 'auto',
  padding: 0,
  margin: 0,
});

const SelectItemsStyles = (isSelected: boolean) =>
  css({
    padding: '11px 16px',
    width: '100%',
    boxSizing: 'border-box',

    fontSize: 16,
    color: isSelected ? Colors.primary[800] : Colors.primary[600],
    backgroundColor: isSelected ? Colors.primary[200] : 'transparent',

    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    listStyle: 'none',

    '&:hover': {
      backgroundColor: Colors.primary[200],
      color: Colors.primary[800],
    },
  });

const SelectContainerStyles = (width: number, isSelected: boolean) => {
  return css({
    position: 'relative',
    width: `${width}px`,
    minWidth: 280,
    [`> button.${prefixCls}-button`]: SelectStyles(isSelected),
    [`> ul.${prefixCls}-selectbox`]: SelectBoxStyles,
  });
};
