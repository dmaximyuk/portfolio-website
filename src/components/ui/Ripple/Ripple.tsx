import { FC, useState, useLayoutEffect } from "react";

import { IRippleProps } from ".";

import styles from "./Ripple.module.scss";

export const Ripple: FC<IRippleProps> = (props) => {
  const [rippleArray, setRippleArray] = useState<Array<Object>>([]);

  useLayoutEffect(() => {
    const duration = 500;
    const rippleCount = rippleArray.length;

    let timer: NodeJS.Timeout = setTimeout(() => {}, 1);

    if (rippleCount > 0) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        setRippleArray([]);
        clearTimeout(timer);
      }, duration * 4);
    }

    return () => clearTimeout(timer);
  }, [rippleArray.length]);

  const addRipple = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.clientX - rippleContainer.x - size / 2;
    const y = event.clientY - rippleContainer.y - size / 2;

    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div className={styles.Ripple} onClick={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: any, index: number) => {
          return (
            <span
              className={styles.Ripple__effect}
              key={"ripple-effect-block" + index}
              style={{
                top: ripple?.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
};
