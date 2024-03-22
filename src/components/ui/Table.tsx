import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CheckBox } from './CheckBox';
import { FolderType } from '../../../types';

interface TableProps {
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  bodyItems: FolderType[];
  headItems: string[];
  hasNavigate?: boolean;
}

export const Table: FC<TableProps> = ({
  Icon,
  bodyItems,
  headItems,
  hasNavigate = false,
}) => {
  const navigate = useNavigate();

  return (
    <table className="w-full caption-bottom">
      <thead className="border-b">
        <tr className="border-b-2 transition-colors hover:bg-secondary-100 data-[state=selected]:bg-secondary-200">
          <th className="h-12 pl-4 text-left align-middle font-medium">
            <CheckBox id="selected-all" role="checkbox" />
          </th>
          <th className="h-12 text-left align-middle font-medium">Nombre</th>
          {headItems.map((item, index) => (
            <th
              key={index}
              className="h-12 px-4 text-right align-middle font-medium"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyItems.map((item) => (
          <tr
            key={item.id}
            onClick={() => hasNavigate && navigate(`/videos/${item.id}`)}
            className="border-b-2 font-light transition-colors hover:bg-secondary-100 data-[state=selected]:bg-secondary-200 hover:cursor-pointer"
          >
            <td className="pl-4 align-middle">
              <CheckBox />
            </td>
            <td className="inline-flex gap-4 items-center py-3 align-middle ">
              <Icon width={30} height={30} className="text-primary-700" />
              {item.name}
            </td>
            <td className="pr-6 text-right align-middle">
              {item.videos || item.size}
            </td>
            <td className="pr-6 text-right align-middle">
              {headItems.indexOf('Duración') === 1 ? item.duration : item.size}
            </td>
            <td className="pr-10 text-right align-middle">
              {item.lastModified}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
