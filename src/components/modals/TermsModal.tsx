import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Heading,
  Text,
  Flex,
  useTheme,
  useColorMode,
  Checkbox,
  ModalHeader,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { termsStatus } from "@/recoil/launch/atom";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { useTermsModal } from "@/hooks/modals/useTermsModal";

const TermsModal = () => {
  const { onOpenTerms, onClose, isOpen: termsModal } = useTermsModal();
  return (
    <Modal isOpen={termsModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>

        <Button variant="ghost">Secondary Action</Button>
      </ModalContent>
    </Modal>
  );
};

export default TermsModal;
