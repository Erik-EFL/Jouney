import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Logo } from "./assets/icons/logo";

export function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-mascLadrilho bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="bemvindo flex flex-col items-center gap-3">
          <Logo  />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center jus shadow-shape">
          <div className="spacer flex items-center gap-2 flex-1">
            <MapPin className="text-zinc-400" size={20} />
            <input className="bg-transparent placeholder-zinc-400 outline-none flex-1" type="text" placeholder="Para onde você vai?" />
          </div>

          <div className="spacer flex items-center gap-2">
            <Calendar className="text-zinc-400" size={20} />
            <input className="bg-transparent placeholder-zinc-400 font-medium w-40 outline-none" type="text" placeholder="Quando?" />
          </div>

          <div className="w-px h-4 bg-zinc-800" />

          <button className="rounded-lg px-5 py-2 bg-lime-300 text-lime-950 flex items-center gap-2 hover:bg-lime-400" type="button">Continuar <ArrowRight className="size-5" /></button>
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 text-sm underline" href="#">termos de uso</a> e <a className="text-zinc-300 text-sm underline" href="#">políticas de privacidade</a>.
        </p>
      </div>
    </div>
  )
}
