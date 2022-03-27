import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item">
              <button className="btn btn-outline-secondary" onClick={handlePrevious}>
                Previous
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button className="btn btn-outline-secondary" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
