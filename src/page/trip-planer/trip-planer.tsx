import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react";
import { EmailType } from "../../@types/email.type";
import { Logo } from "../../assets/icons/logo";
import { useConfig } from "../../context/config.context";
import { InviteModal } from "../creat-invite";
import { ModalCreatTrip } from "../creat-trip";

export function TripPlanner() {
  const { emails, isGestInputOpen, isGestModalOpen, isGestTripModalOpen, openInviteModal, openTripModal, setIsGestInputOpen } = useConfig();

  const getInvitedPeopleCount = (data: EmailType[]) => {
    return data.length > 0
      ? <span className="bg-traparent outline-none flex-1 text-left text-zinc-100">{emails.length} pessoa(s) convidada(s)</span>
      : <span className="bg-traparent outline-none flex-1 text-left text-zinc-400">Quem estara na viagem?</span>;
  };

  return (
    <div className="h-screen flex items-center justify-center bg-mascLadrilho bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <Logo  />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="spacer flex items-center gap-2 flex-1">
              <MapPin className="text-zinc-400" size={20} />
              <input
                disabled={isGestInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="text-zinc-400" size={20} />
              <input
                disabled={isGestInputOpen}
                placeholder="Quando?"
                type="text"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGestInputOpen ? (
              <button
                className="rounded-lg px-5 py-2 bg-zinc-800 text-zinc-200 flex items-center gap-2 hover:bg-zinc-700"
                onClick={() => setIsGestInputOpen(!isGestInputOpen)}
              >
                Alterar Local/Data
                <Settings2 className="size-5" />
              </button>
            ) :
              (
                <button
                  className="rounded-lg px-5 py-2 bg-lime-300 text-lime-950 flex items-center gap-2 hover:bg-lime-400"
                  type="button"
                  onClick={() => setIsGestInputOpen(!isGestInputOpen)}
                >
                  Continuar <ArrowRight className="size-5" />
                </button>
              )
            }
          </div>

          {isGestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center jus shadow-shape">
              <button
                type="button"
                onClick={openInviteModal}
                className="spacer flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="text-zinc-400" size={20} />
                {getInvitedPeopleCount(emails)}
              </button>

              <div className="w-px h-4 bg-zinc-800" />

              <button
                className="rounded-lg px-5 py-2 bg-lime-300 text-lime-950 flex items-center gap-2 hover:bg-lime-400"
                type="button"
                onClick={openTripModal}
              >
              Confirma viagem <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 text-sm underline" href="#">termos de uso</a> e <a className="text-zinc-300 text-sm underline" href="#">políticas de privacidade</a>.
        </p>
      </div>

      {isGestModalOpen && (
        <InviteModal onClose={openInviteModal} />
      )}

      {isGestTripModalOpen && (
        <ModalCreatTrip onClose={openTripModal} />
      )}
    </div>
  )
}
