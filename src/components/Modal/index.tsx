import { close } from "features/modal/modalSlice";
import { useAppDispatch } from "hooks/useRedux";
import { PropsWithChildren } from "react";
import style from "./Modal.module.css";

export default function Modal({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <div className={style.container}>
      <div className={style.background} onClick={handleClose} />

      <div className={style.content}>{children}</div>
    </div>
  );
}
