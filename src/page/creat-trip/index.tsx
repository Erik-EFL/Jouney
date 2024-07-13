import { Mail, User, X } from "lucide-react";
import ModalComponent from "../../components/modal";
import { useConfig } from "../../context/config.context";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  onClose: () => void;
}

export function ModalCreatTrip({ onClose }: ModalProps) {
  const { setInputValue, tripData } = useConfig();
  const navigate = useNavigate();

  function createTrip() {
    navigate('/trips/1');
  };

  function handleTripConfirmation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const getDataInput = new FormData(event.currentTarget);

    if (!getDataInput) {
      return;
    }

    setInputValue('');
    createTrip();
  }


  return (
    <ModalComponent>
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <X onClick={onClose} className="text-zinc-400 cursor-pointer size-5" />
          </div>
          <p className="text-sm text-zinc-400 font-normal leading-tight">Para concluir a criação da viagem para <span className="text-zinc-100 text-sm font-bold">{tripData.city}</span>, <span className="text-zinc-100 text-sm font-bold">{tripData.country}</span> nas datas de <span className="text-zinc-100 text-sm font-bold">{tripData.startDate}</span> a <span className="text-zinc-100 text-sm font-bold">{tripData.endDate}</span> preencha seus dados abaixo:</p>
        </div>
        <form onSubmit={handleTripConfirmation} className="flex flex-col space-y-3">
          <div className="bg-zinc-950 rounded-xl border border-zinc-800 flex items-center px-4 h-14 gap-2">
            <User className="text-zinc-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent h-full placeholder-zinc-400 flex-1 outline-none"
              onChange={e => setInputValue(e.target.value)}
            />
          </div>
          <div className="bg-zinc-950 rounded-xl border border-zinc-800 flex items-center px-4 h-14 gap-2">
            <Mail className="text-zinc-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent h-full placeholder-zinc-400 flex-1 outline-none"
              onChange={e => setInputValue(e.target.value)}
            />
          </div>


          <button
            type="submit"
            className="rounded-lg px-5 h-11 bg-lime-300 text-lime-950 flex items-center gap-2 hover:bg-lime-400 justify-center text-base font-medium"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </ModalComponent>
  )
}
