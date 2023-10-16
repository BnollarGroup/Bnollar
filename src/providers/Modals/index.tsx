import { useAppSelector } from "hooks/useRedux";
import { useEffect } from "react";
import ProfileEditDetailsModal from "./Profile/EditDetails";

export default function Modals() {
  const modals = useAppSelector((state) => state.modals);

  useEffect(() => {
    if (!modals) return document.body.classList.remove("modal-open");

    document.body.classList.add("modal-open");
  }, [modals]);

  return (
    <>{modals.modal === "profile-editDetails" && <ProfileEditDetailsModal />}</>
  );
}
