import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('modal');
  return el && createPortal(children, el);
};

export default Modal;
