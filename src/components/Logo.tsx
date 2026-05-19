export const Logo = ({
  variant = 'white',
  horizontal = false,
}: {
  variant?: 'white' | 'color';
  horizontal?: boolean;
}) => {
  return (
    <img
      src="/images/logo.png"
      alt="Freedom First Logo"
      className={`${horizontal ? 'h-12 md:h-16 w-auto' : 'h-10 w-auto md:h-14'} ${variant === 'white' ? 'brightness-0 invert' : ''}`}
    />
  );
};
