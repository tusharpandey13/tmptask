import { useEffect } from 'react';
import PortfolioCard from './portfolioCard';
import { data } from './../../utils/remoteData';
import { useDispatch, useSelector } from 'react-redux';

const PortfolioContainer = props => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.items);
  // console.log(store);
  useEffect(() => {
    data().then(r => {
      dispatch({ type: 'CHANGE_ITEMS', items: r.data });
    });
  }, []); // once
  return (
    <div className='h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-28 gap-y-8 p-20 pt-24 pb-24 m-0 bg-Portfoliosbg'>
      {Object.keys(store).map((k, i) => {
        return <PortfolioCard key={i} title={k} data={store[k]}></PortfolioCard>;
      })}
    </div>
  );
};
export default PortfolioContainer;
