const UpgradeCard = () => {
  return (
    <div className="text-center my-3 mx-3 upgrade-card ">
      <h1 className=" main-theme-text"
      >
        +10
      </h1>
      <div className="d-xxl-flex justify-content-xxl-center align-items-xxl-center">
        <span className=" main-theme-text"
        >
          Essence
        </span>
        <input className="mx-3" type="checkbox" data-bs-theme="dark" />
      </div>
      <div className="d-xxl-flex justify-content-xxl-center align-items-xxl-center">
        <span className=" main-theme-text"
        >
          Reol
        </span>
        <input className="mx-3" type="checkbox" data-bs-theme="dark" />
      </div>
      <div className="d-xxl-flex justify-content-xxl-center align-items-xxl-center">
        <span className=" main-theme-text"
        >
          Dvigg
        </span>
        <input className="mx-3 dark" type="checkbox" data-bs-theme="dark" />
      </div>
    </div>
  );
}

export default UpgradeCard;