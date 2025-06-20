import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { Title } from "../components/Title";

export const TaskPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          {/* botão voltar */}
          <div className="flex justify-center mb-6">
            <button
              className="absolute left-0 top-0 bottom-0 text-slate-100"
              onClick={() => navigate(-1)}
            >
              <ChevronLeftIcon />
            </button>
          </div>

          <Title> Detalhe da Tarefe </Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold text-slate-600">
            {title}
          </h2>
          <p className="text-slate-600">{description} </p>
        </div>
      </div>
    </div>
  );
};
