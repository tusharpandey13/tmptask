import { useEffect } from 'react';
import PortfolioCard from './portfolioCard';
import { data } from './../../utils/remoteData';

const PortfolioContainer = props => {
  useEffect(() => {
    data().then(r => {
      props.dispatch({ type: 'CHANGE_ITEMS', items: r.data });
    });
  }, []); // once
  return (
    <div className='h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-28 gap-y-8 p-20 pt-24 pb-24 m-0 bg-Portfoliosbg'>
      {Object.keys(props.store.items).map((k, i) => {
        return <PortfolioCard key={i} title={k} data={props.store.items[k]}></PortfolioCard>;
      })}
    </div>
  );
};
export default PortfolioContainer;
