import { useAppSelector } from "hooks/useRedux";
import { useEffect } from "react";
import ProfileEditDetailsModal from "./Profile/EditDetails";
import UploadNFTUploadFileModal from "./UploadNFT/UploadFile";

export default function Modals() {
  const modals = useAppSelector((state) => state.modals);

  useEffect(() => {
    if (!modals.modal) return document.body.classList.remove("modal-open");

    document.body.classList.add("modal-open");
  }, [modals]);

  return (
    <>
      {modals.modal === "profile-editDetails" && <ProfileEditDetailsModal />}
      {modals.modal === "uploadNFT-uploadFile" && <UploadNFTUploadFileModal />}
    </>
  );
}
