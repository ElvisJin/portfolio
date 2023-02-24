import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/meta-crawler/portfolio/master/src/Assets/resume.pdf";

function ResumeNew() {
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [isBtnShow, setBtnShow] = useState(false);

  /*To Prevent right click on screen*/
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });

  const onDocumentLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
    setBtnShow(true);
    setPage(1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else return;
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    } else return;
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumeLink}
            className="d-flex justify-content-center position-relative width-max-content"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={page} />
            {isBtnShow && (
              <div
                className="page-ctrl-btn pdf-prev-btn"
                role="button"
                onClick={prevPage}
              >
                <FaChevronLeft />
              </div>
            )}
            {isBtnShow && (
              <div
                className="page-ctrl-btn pdf-next-btn"
                role="button"
                onClick={nextPage}
              >
                <FaChevronRight />
              </div>
            )}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
