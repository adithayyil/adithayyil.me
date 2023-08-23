function SvgIcon(props: {
  [x: string]: any;
  width: any;
  height: any;
  viewBox: any;
  children: any;
}) {
  const { width, height, viewBox, children, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      {...otherProps}
    >
      {children}
    </svg>
  );
}

export default SvgIcon;
