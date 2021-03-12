const PortfolioCard = props => {
  return (
    <div className='w-full h-auto bg-fff border border-cardborder shadow-xl flex flex-col '>
      <div className='w-full font-Roboto-Condensed text-header-dimtext text-2xl bg-cardborder p-2 pl-4 capitalize'>
        {props.title}
      </div>
      <div>
        {Object.keys(props.data).map((k, i) => (
          <div
            key={i}
            className='w-full font-Roboto-Condensed border-dotted border-t-2 first:border-opacity-0 border-cardborder flex p-2 pl-6 pr-1'
          >
            <span className='w-9/12'>{k}</span>
            <span>{Number(props.data[k]) > 0 ? `+${props.data[k]}` : props.data[k]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PortfolioCard;
