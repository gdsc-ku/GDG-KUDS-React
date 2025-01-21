//mport { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef } from 'react';
//import { Colors } from '../../constants/colors';
import { PREFIX_CLS } from '../ConfigProvider/context';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  colorType?: ColorType;
}

const prefixCls = `${PREFIX_CLS}-select`;

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { colorType, className, ...selectProps } = props;
  const { disabled } = selectProps;

  const selectCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );

  return <select ref={ref} className={selectCls} {...selectProps} />;
});

export default Select;
