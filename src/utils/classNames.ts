type AvailableClass =
  | string
  | number
  | Array<AvailableClass>
  | Record<string, boolean | undefined | null>
  | undefined
  | null
  | false;

const parseCls = (cls: AvailableClass, prefix?: string): string | undefined => {
  prefix = prefix ? `${prefix}-` : '';

  if (!cls) return;

  if (typeof cls === 'string' || typeof cls === 'number') return `${prefix}${cls}`;
  if (Array.isArray(cls)) return cls.map((item) => parseCls(item, prefix)).join(' ');

  if (typeof cls === 'object')
    return Object.entries(cls)
      .filter(([, value]) => !!value)
      .map(([key]) => `${prefix}${key}`)
      .join(' ');
};

export const generateClasses =
  (prefix?: string) =>
  (suffixes: AvailableClass[], ...cls: (string | undefined)[]) => {
    const mergedClasses = suffixes
      .map((suffix) => parseCls(suffix, prefix))
      .filter((cls) => !!cls)
      .join(' ');

    if (cls.length > 0) {
      const classes = cls.filter((cls) => !!cls).join(' ');
      return `${mergedClasses} ${classes}`;
    }

    return mergedClasses;
  };

export const clsx = (...values: AvailableClass[]): string => {
  return values
    .map((value) => parseCls(value))
    .filter((cls) => !!cls)
    .join(' ');
};
