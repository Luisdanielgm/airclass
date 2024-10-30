// components/Modal.tsx
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  width?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className, width = 'max-w-5xl' }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex justify-center items-start z-50 p-4 pt-20">
      <div className={`bg-background dark:bg-gray-900 rounded-lg p-6 w-full shadow-lg dark:shadow-gray-900/50 ${width} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
