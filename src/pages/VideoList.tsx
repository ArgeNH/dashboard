import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftSvg } from '../components/icons/ArrowLeft';
import { TABLE_BODY, TABLE_BODY_VIDEOS } from '../constants';
import { Table } from '../components/ui';
import { PlayerSvg } from '../components/icons';

export const VideoList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-4 md:flex-row">
        <button
          className="bg-primary-700 p-2 rounded-md"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftSvg width={32} height={32} className="text-white" />
        </button>

        <h1 className="text-2xl">Home /</h1>
        <h1 className="text-2xl font-bold">
          {TABLE_BODY.find((item) => item?.id === +id!)?.name}
        </h1>
      </div>

      <div className="overflow-y-auto max-h-[80%] md:max-h-[100%] mt-10">
        <Table
          Icon={PlayerSvg}
          bodyItems={TABLE_BODY_VIDEOS}
          headItems={['Tamaño', 'Duración', 'Ultima Modificación']}
        />
      </div>
    </>
  );
};
