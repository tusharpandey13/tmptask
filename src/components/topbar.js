import Icon from '@mdi/react';
import { mdiMenuDown, mdiLeaf, mdiAccountCircleOutline } from '@mdi/js';

const Topbar = props => {
  return (
    <div
      className={`w-full bg-transparent flex flex-col content-center justify-center align-middle md:flex-row md:justify-between md:flex-nowrap p-6 bg-headerbg text-fff font-Roboto-Condensed`}
    >
      <div className='flex w-auto justify-center pb-4 md:pb-0 cursor-pointer'>
        <Icon
          className='mr-6 text-yellow-400'
          onClick={e => props.dispatch({ type: 'RESET_ACTIVEVIEWINDEX' })}
          path={mdiLeaf}
          size={`40px`}
        />
        <div className='flex flex-col justify-center text-gray-300 text-2xl'>PORTFOLIO DASHBOARD</div>
      </div>
      <div className='flex md:flex-col justify-center'>
        <div className='flex flex-col md:flex-row cursor-pointer content-center text-center'>
          <span className='font-bold mb-1 '>MY PORTFOLIOS</span>
          <span className='text-header-dimtext hidden md:inline-flex pl-2 pr-2'> |</span>
          <span className='text-header-dimtext mb-1'> CREATE PORTFOLIO</span>
          <span className='text-header-dimtext hidden md:inline-flex pl-2 pr-2'> |</span>
          <div className='flex'>
            <span className='text-header-dimtext'> test_user</span>
            <Icon className='ml-4' path={mdiAccountCircleOutline} size={`20px`} />
            <Icon className='ml-1' path={mdiMenuDown} size={`20px`} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
