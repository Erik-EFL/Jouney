import { createContext, useContext, useState, PropsWithChildren } from 'react';
import { IData } from '../@types/data-tripe.type';
import { EmailType } from '../@types/email.type';

interface IConfigContext {
  isGestInputOpen: boolean;
  isGestModalOpen: boolean;
  isGestTripModalOpen: boolean;
  inputValue: string;
  emails: string[];
  tripData: IData;
  setTripData: (data: IData) => void;
  setInputValue: (value: string) => void;
  setEmails: (emails: string[]) => void;
  setIsGestInputOpen: (value: boolean) => void;
  setIsGestModalOpen: (value: boolean) => void;
  setIsGestTripModalOpen: (value: boolean) => void;
  openInviteModal: () => void;
  openTripModal: () => void;
  inputOpen: () => void;
};

export const ConfigContext = createContext({} as IConfigContext);

export const ConfigProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isGestInputOpen, setIsGestInputOpen] = useState<boolean>(false);
  const [isGestModalOpen, setIsGestModalOpen] = useState<boolean>(false);
  const [isGestTripModalOpen, setIsGestTripModalOpen] = useState<boolean>(false);
  const [emails, setEmails] = useState<EmailType[]>([
    'jhon.dol@test.com',
  ]);
  const [tripData, setTripData] = useState<IData>({
    city: 'Florianopolis',
    country: 'Brasil',
    startDate: '12/ago/2024',
    endDate: '27/ago/2024',
  });

  const inputOpen = () => {
    setIsGestInputOpen(!isGestInputOpen);
  };

  const openInviteModal = () => {
    setIsGestModalOpen(!isGestModalOpen);
  };

  const openTripModal = () => {
    setIsGestTripModalOpen(!isGestTripModalOpen);
  };


  return (
    <ConfigContext.Provider
      value={{
        isGestInputOpen,
        isGestModalOpen,
        isGestTripModalOpen,
        inputValue,
        emails,
        tripData,
        setTripData,
        setInputValue,
        setEmails,
        setIsGestInputOpen,
        setIsGestModalOpen,
        setIsGestTripModalOpen,
        openInviteModal,
        openTripModal,
        inputOpen,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => {
  return useContext(ConfigContext);
};
