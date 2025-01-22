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
  options: { value: string; label: string }[];
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const prefixCls = `${PREFIX_CLS}-select`;

const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => {
  const { colorType, className, ...selectProps } = props;
  const { disabled, options, value, placeholder, onChange } = selectProps;

  const selectCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
      [`${prefixCls}-disabled`]: disabled,
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

  return (
    <div css={SelectContainerStyles} className={selectCls}>
      <button ref={ref} onClick={handleToggle} className={clsx(`${prefixCls}-button`)}>
        <span className={clsx(`${prefixCls}-placeholder`)}>
          {selectedValue ? options.find((o) => o.value === selectedValue)?.label : placeholder}
        </span>
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

const SelectStyles = css({
  color: Colors.primary[500],

  padding: '8px, 16px',
  minWidth: 280,
  height: 40,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 178,

  border: '1px solid',
  borderRadius: 8,

  borderColor: Colors.primary[500],
  backgroundColor: Colors.primary[100],

  [`> .${prefixCls}-placeholder`]: {
    fontSize: 16,
    fontWeight: 500,
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

  width: '100%', // 버튼의 너비와 동일하게 설정
  backgroundColor: Colors.primary[100],
  borderRadius: 8,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${Colors.primary[500]}`,

  zIndex: 10,
  maxHeight: 200,
  overflowY: 'auto',
  padding: 0, // 불필요한 패딩 제거
  margin: 0, // 기본 마진 제거
});

const SelectItemsStyles = (isSelected: boolean) =>
  css({
    padding: '8px 16px', // 선택 항목의 패딩
    width: 'inherit',
    fontSize: 14,
    color: isSelected ? Colors.primary[800] : Colors.primary[600],
    backgroundColor: isSelected ? Colors.primary[200] : 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    listStyle: 'none',
    listStylePosition: 'inherit',

    '&:hover': {
      backgroundColor: Colors.primary[300],
      color: Colors.primary[800],
    },
  });

const SelectContainerStyles = css({
  position: 'relative',
  minWidth: 280,

  [`> button.${prefixCls}-button`]: SelectStyles,
  [`> ul.${prefixCls}-selectbox`]: SelectBoxStyles,
});
