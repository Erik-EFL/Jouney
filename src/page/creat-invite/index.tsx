import { AtSign, Plus, X } from "lucide-react";
import { emailValidation } from "../../@types/email.type";
import { EmailTag } from "../../components/email-tag";
import ModalComponent from "../../components/modal";
import { useConfig } from "../../context/config.context";

interface IInviteModal {
  onClose: () => void;
}

export function InviteModal({ onClose }: IInviteModal) {
  const { emails, setEmails, inputValue, setInputValue } = useConfig();

  function handleDelete(oldEmail: string) {
    setEmails(emails.filter(email => email !== oldEmail));
  }

  function handleInvite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const getDataInput = new FormData(event.currentTarget);


    if (!getDataInput) {
      return;
    }
    const newEmail = getDataInput.get('email') as string;

    const emailExists = emails.includes(newEmail);

    if (emailExists) {
      return;
    }

    const isValidEmail = emailValidation(newEmail);

    if (!isValidEmail) {
      return;
    }

    setEmails([...emails, newEmail]);
    setInputValue('');
  }

  return (
    <ModalComponent>
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <X onClick={onClose} className="text-zinc-400 cursor-pointer size-5" />
          </div>
          <p className="text-sm text-zinc-400 font-normal leading-tight">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
        </div>
        <div className="convidados justify-start items-start gap-2 inline-flex flex-wrap">
          {emails.map((email: string) => (
            <EmailTag
              key={email}
              email={email}
              onDelete={() => handleDelete(email)}
            />
          ))}
        </div>

        <div className="bg-zinc-800 h-px w-full" />

        <form
          onSubmit={(event) => handleInvite(event)}
          className="flex items-center gap-2h-16 bg-zinc-950 px-4 rounded-lg border border-zinc-800 gap-3 py-3"
        >
          <AtSign className="text-zinc-400" size={20} />
          <input
            placeholder="Digite o e-mail do convidado"
            type="email"
            className="bg-transparent placeholder-zinc-400 flex-1 outline-none"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            name="email"
          />

          <div className="w-px h-6 bg-zinc-800" />

          <button
            type="submit"
            className="rounded-lg px-5 py-1 bg-lime-300 text-lime-950 flex items-center gap-2 hover:bg-lime-400"
          >
            Convidar <Plus className="size-5" />
          </button>
        </form>
      </div>
    </ModalComponent>
  )
}
