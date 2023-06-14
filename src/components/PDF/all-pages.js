

import React, { useState,Fragment } from "react";
import { Document, Page,pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <Fragment>
      <div className="all-page-container">
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e)=>{e.preventDefault()}}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      </div>
      <div className="container" style={{width:"100% "}}>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4" style={{textAlign:"center"}}>
          <h4>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </h4>
        </div>
      
      </div>
        <div className="row">
        
        <div className="col-md-12" style={{textAlign:"center"}}>
          <p>
             <button 
            type="button" 
            className= "btn btn-gray"
            disabled={pageNumber <= 1} 
            onClick={previousPage}>
          <i class="icofont-arrow-left"></i>
        </button>
        <button
          type="button"
           className= "btn btn-gray"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          style={{marginTop:"0px !important"}}
        >
         <i class="icofont-arrow-right"></i>
        </button>
            </p>
        </div>
      
      </div>
        
      </div>
    </Fragment>
  );
}