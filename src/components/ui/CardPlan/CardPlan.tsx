import { PLAN_ITEMS } from '../../../constants';
import { Progress } from './Progress';

export const CardPlan = () => {
  return (
    <article className="flex flex-col gap-6 p-4 rounded-xl bg-secondary-150 mt-40">
      <article>
        <h3 className="text-base font-medium">Mi Plan - Plus</h3>
        <p className="text-xs italic">El uso se renueva el: 3-may-23</p>
      </article>
      <article className="flex flex-col gap-2">
        {PLAN_ITEMS.map((item) => (
          <Progress key={item.id} {...item} />
        ))}
      </article>
      <article>
        <button className="px-2 py-1 bg-primary-700 rounded-full text-white">
          Administrar Plan
        </button>
      </article>
    </article>
  );
};
