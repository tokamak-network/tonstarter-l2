import { termsStatus } from "@/recoil/launch/atom";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export function useTermsModal() {
  const [termsModal, setTermsModal] = useRecoilState(termsStatus);
    console.log('termsModal,termsModal',termsModal);
    
  const onOpenTerms = useCallback(() => {
    console.log('ggg');
    
    setTermsModal(true);
  }, [setTermsModal,termsModal]);

  const onClose = useCallback(() => {
    setTermsModal(false);
  }, [setTermsModal,termsModal]);

  return {
    onOpenTerms,
    onClose,
    isOpen: termsModal,
  };
}
