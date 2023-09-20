import { useEffect, useState, useRef } from 'react';

type useClickAwayTypes = [
  boolean,
  React.MutableRefObject<HTMLDivElement | null>,
  () => void,
];

const useClickAway = (): useClickAwayTypes => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | HTMLInputElement | null>(null);

  const toggleHandler = () => setIsOpen((prev) => !prev);

  const clickAwayHandler = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target))
      setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', clickAwayHandler);
      return () => window.removeEventListener('click', clickAwayHandler);
    }
  }, [isOpen]);

  return [isOpen, ref, toggleHandler];
};

export default useClickAway;
