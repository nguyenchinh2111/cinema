'use client';

interface ButtonComponentProps {
    children?: React.ReactNode;
    text?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function ButtonComponent({
    text,
    children,
    className = '',
    onClick,
    disabled = false,
}: ButtonComponentProps) {
    return (
      <button onClick={onClick} disabled={disabled} className={className}>
        {children || text}
      </button>
    );
}
