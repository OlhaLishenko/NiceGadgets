import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { SortByAmount, SortByButtons } from '../Enum/SortByButtons';

type SortContextType = {
  selectedSortBy: SortByButtons;
  setSelectedSortBy: Dispatch<SetStateAction<SortByButtons>>;
  selectedSortByAmount: SortByAmount;
  setSelectedSortByAmount: Dispatch<SetStateAction<SortByAmount>>;
  dropdownIsActive: boolean;
  setDropdownIsActive: Dispatch<SetStateAction<boolean>>;
};

export const SortContext = createContext<SortContextType>({
  selectedSortBy: SortByButtons.NEWEST,
  setSelectedSortBy: () => {},
  selectedSortByAmount: SortByAmount.FOUR,
  setSelectedSortByAmount: () => {},
  dropdownIsActive: false,
  setDropdownIsActive: () => {},
});

export const SortProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSortBy, setSelectedSortBy] = useState<SortByButtons>(
    SortByButtons.NEWEST,
  );
  const [selectedSortByAmount, setSelectedSortByAmount] =
    useState<SortByAmount>(SortByAmount.FOUR);

  const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);

  return (
    <SortContext.Provider
      value={{
        selectedSortBy,
        setSelectedSortBy,
        selectedSortByAmount,
        setSelectedSortByAmount,
        dropdownIsActive,
        setDropdownIsActive,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};
