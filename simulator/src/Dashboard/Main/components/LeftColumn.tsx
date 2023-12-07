const LeftColumn = () => {
  return (
    <div className="col-md-6 left-col" style={{ background: 'black', border: 'solid 1px black', boxShadow: '0 0 3px 1px black' }}>
      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Rank
        </h2>
        <div
          className="dropdown d-flex justify-content-center align-items-center"
          style={{ width: '30%', background: 'var(--bs-btn-bg)', margin: '0 auto' }}
        >
          <button
            className="btn btn-dark dropdown-toggle d-flex justify-content-center align-items-center"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            type="button"
            style={{
              width: '100%',
              background: 'black',
              boxShadow: '0px 0px 3px 1px black',
              borderColor: 'black',
              fontFamily: 'Oswald, sans-serif',
              color: '#868e96',
              borderRadius: '0px',
            }}
          >
            XII
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              First Item
            </a>
            <a className="dropdown-item" href="#">
              Second Item
            </a>
            <a className="dropdown-item" href="#">
              Third Item
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Endurance
        </h2>
        <input
          className="form-control-lg user-input"
          type="number"
          step="1"
          placeholder="%"
          value={45}
          min="0"
          max="100"
        />
      </div>

      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Platinum
        </h2>
        <input
          className="form-control-lg user-input"
          type="number"
          step="500"
          placeholder="price"
          min="0"
        />
      </div>

      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Essence
        </h2>
        <input
          className="form-control-lg user-input"
          type="number"
          step="500"
          placeholder="price"
          min="0"
        />
      </div>

      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Reol
        </h2>
        <input
          className="form-control-lg user-input"
          type="number"
          step="500"
          placeholder="price"
          min="0"
        />
      </div>

      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Dvigg
        </h2>
        <input
          className="form-control-lg user-input"
          type="number"
          step="500"
          placeholder="price"
          min="0"
        />
      </div>

      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Upgrade target
        </h2>
        <input
          className="form-control-lg user-input"
          type="number"
          step="1"
          value="7"
          min="1"
        />
      </div>

      <div className="d-flex justify-content-center align-items-center left-div my-3">
        <h2
          className="text-center users-input-headings my-3 main-theme-text"
        >
          Iterations
        </h2>
        <input
          className="form-control-lg user-input"
          type="number"
          step="1"
          value="10"
          min="1"
        />
      </div>
    </div>
  );
}
export default LeftColumn;