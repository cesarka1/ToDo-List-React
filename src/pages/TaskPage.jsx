import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]  space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-blod text-center font-bold">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-x text-white font-bold text-slate-600">
            {title}
          </h2>
          <p className="text-white text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;