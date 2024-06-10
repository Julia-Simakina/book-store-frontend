import styled from "styled-components";
import ArrowButton from "../ArrowButton/ArrowButton";
import PageSelectButton from "../PageSelectButton/PageSelectButton";

const Pagination: React.FC = (props) => {
  return (
    <></>
    //     <StyledPagination>
    //     <ArrowButton disabled={currentPage === 1} onClick={handlePrevPage} />
    //     <div className="page-button-container">
    //       {pageNumbers.map((num) => (
    //         <PageSelectButton
    //           key={num}
    //           onClick={() => setCurrentPage(num)}
    //           select={currentPage === num}
    //         />
    //       ))}
    //     </div>
    //     <ArrowButton
    //       transform="rotate(180deg)"
    //       disabled={currentPage === pageNumbers.length}
    //       onClick={handleNextPage}
    //     />
    //   </StyledPagination>
  );
};

// const StyledPagination = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;

//   .page-button-container {
//     display: flex;
//     gap: 30px;
//   }
// `;

export default Pagination;
