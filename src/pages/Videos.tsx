import { useState } from 'react';

import { FolderSvg, PlayerSvg, SearchSvg } from '../components/icons';
import { TabItems, TABLE_BODY } from '../constants';
import { Button, Tab, Table } from '../components/ui';

export const Videos = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-between">
        <article className="flex flex-row gap-4">
          {TabItems.map((item, index) => (
            <Tab
              key={item.id}
              {...item}
              setTabIndex={setTabIndex}
              active={index === tabIndex}
            />
          ))}
        </article>
        <article className="flex flex-row gap-4">
          <Button variant="secondary">
            <FolderSvg width={24} height={24} /> Nueva Carpeta
          </Button>
          <Button variant="primary">
            <PlayerSvg width={24} height={24} /> Nuevo Video
          </Button>
        </article>
      </div>

      <article className="p-1 inline-flex gap-2 justify-center items-center my-14 border-2 rounded-lg w-[40%]">
        <SearchSvg width={30} height={30} className="ml-3 text-secondary-300" />
        <input
          type="text"
          placeholder="Buscar Video"
          className="p-2 text-lg w-full border-l-2 appearance-none focus:outline-none"
        />
      </article>

      <div className="relative w-full overflow-auto">
        <Table Icon={FolderSvg} bodyItems={TABLE_BODY} />
      </div>
    </>
  );
};
