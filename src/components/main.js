import Topbar from './topbar';
import PortfolioContainer from './portfolio/portfolioContainer';

const Main = props => {
  return (
    <div className='flex flex-nowrap flex-col h-full text-gray p-0'>
      <Topbar {...props}></Topbar>
      <PortfolioContainer {...props}></PortfolioContainer>
    </div>
  );
};
export default Main;
