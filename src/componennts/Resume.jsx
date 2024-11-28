import React, { useState, useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="ResumePage">
            <Document
                file="/Testing.pdf"
                onLoadError={(error) => console.error("Error loading PDF:", error)}
            >
                <Page
                    pageNumber={1} 
                    scale={windowWidth < 700 ? (windowWidth > 475 ? 0.7 : 0.5) : 1}
                />
            </Document>

            <a href="/Testing.pdf" target="_blank" download="YashMaini_Resume.pdf">
                <button className="downloadResume" type="button">
                    <h3>
                        <BsDownload />
                        &nbsp;Download Resume
                    </h3>
                </button>
            </a>
        </div>
    );
};

export default Resume;
