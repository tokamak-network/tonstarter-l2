import TermsModal from "./TermsModal";
import DualCalendarModal from "./DualCalendarModal";
import SingleCalendarModal from "./SingleCalendarModal";
import VaultModifyModal from "./VaultModifyModal";
import AddVaultModal from "./AddVaultModal";
import EasyModificationModal from "./EasyModificationModal";
import WalletCheckModal from "./WalletCheckModal";
import GasCheckModal from "./GasCheckModal";
import L2ProjectTokenModal from "./L2ProjectTokenModal";
import L1ProjectTokenModal from "./L1ProjectTokenModal";
import VaultModal from "./VaultModal";
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
      <L2ProjectTokenModal/>
      <L1ProjectTokenModal/>
      <VaultModal/>
    </>
  );
}
