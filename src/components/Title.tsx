interface TitleProps {
  children: React.ReactNode;
  size?: 'small' | 'large';
};

export const Title = ({ children , size}: TitleProps) => {
  return (
  <div>
    <h1
      style={{
        fontSize: size === 'small' ? '1.5rem' : '3rem',
      }}
    >{children}</h1>
  </div>
  )
}

