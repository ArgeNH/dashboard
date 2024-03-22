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
      <div className="flex flex-row justify-start items-center gap-4">
        <button
          className="bg-primary-700 p-2 rounded-md"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftSvg width={35} height={35} className="text-white" />
        </button>

        <h1 className="text-2xl">Video List</h1>
        <span className="text-2xl">/</span>
        <h1 className="text-2xl font-bold">
          {TABLE_BODY.find((item) => item?.id === +id!)?.name}
        </h1>
      </div>

      <div className="relative w-full overflow-auto mt-10">
        <Table
          Icon={PlayerSvg}
          bodyItems={TABLE_BODY_VIDEOS}
          headItems={['Tamaño', 'Duración', 'Ultima Modificación']}
        />
      </div>
    </>
  );
};
