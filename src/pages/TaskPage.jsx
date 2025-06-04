import { useSearchParams } from "react-router-dom";
import {ChevronLeftIcon} from "lucide-react"

export const TaskPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">

      {/* botão voltar */}
          <button className="absolute left-0" >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="text-xl text-white font-bold text-slate-600">
            {title}
          </h1>
          <p className="text-slate-600">{description} </p>
        </div>
      </div>
    </div>
  );
};
