import type { FC } from 'react';
import { CheckBox } from './CheckBox';
import { TableType } from '../../../types';

interface TableProps {
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  bodyItems: TableType[];
}

export const Table: FC<TableProps> = ({ Icon, bodyItems }) => {
  return (
    <table className="w-full caption-bottom">
      <thead className="border-b">
        <tr className="border-b-2 transition-colors hover:bg-secondary-100 data-[state=selected]:bg-secondary-200">
          <th className="h-12 pl-4 text-left align-middle font-medium">
            <CheckBox />
          </th>
          <th className="h-12 pr-0 text-left align-middle font-medium">
            Nombre
          </th>
          <th className="h-12 px-4 text-right align-middle font-medium">
            Videos
          </th>
          <th className="h-12 px-4 text-right align-middle font-medium">
            Tamaño
          </th>
          <th className="h-12 px-4 text-right align-middle font-medium">
            Ultima Modificación
          </th>
        </tr>
      </thead>
      <tbody>
        {bodyItems.map((item) => (
          <tr className="border-b-2 font-light transition-colors hover:bg-secondary-100 data-[state=selected]:bg-secondary-200 hover:cursor-pointer">
            <td className="pl-4 align-middle">
              <CheckBox />
            </td>
            <td className="inline-flex gap-4 items-center pr-0 py-3 align-middle ">
              <Icon width={30} height={30} className="text-primary-700" />
              {item.name}
            </td>
            <td className="pr-6 text-right align-middle">{item.videos}</td>
            <td className="pr-6 text-right align-middle">{item.size}</td>
            <td className="pr-10 text-right align-middle">
              {item.lastModified}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
