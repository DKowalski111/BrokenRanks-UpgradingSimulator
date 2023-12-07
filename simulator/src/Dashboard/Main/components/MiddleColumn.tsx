const MiddleColumn = () => {
  return (
    <div className="col d-flex justify-content-center align-items-center mid-col mx-4 my-5">
      <div className="p-2 my-5" style={{ background: 'black', boxShadow: '0 0 3px 1px #868e96' }}>
        <button className="btn main-theme-text" type="button" style={{ borderRadius: '0px' }}>
          Simulate
        </button>
      </div>
    </div>
  );
}
export default MiddleColumn;