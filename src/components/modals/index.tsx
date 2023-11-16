import TermsModal from "./TermsModal";
import DualCalendarModal from "./DualCalendarModal";
import SingleCalendarModal from "./SingleCalendarModal";
import VaultModifyModal from "./VaultModifyModal";
import AddVaultModal from "./AddVaultModal";
import EasyModificationModal from "./EasyModificationModal";
import WalletCheckModal from "./WalletCheckModal";
import GasCheckModal from "./GasCheckModal";
export default function Modals() {
  return (
    <>
      <TermsModal />
      <DualCalendarModal/>
      <SingleCalendarModal/>
      <VaultModifyModal/>
      <AddVaultModal/>
      <EasyModificationModal/>
      <WalletCheckModal/>
      <GasCheckModal/>
    </>
  );
}
