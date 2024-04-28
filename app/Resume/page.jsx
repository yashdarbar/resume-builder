"use client"
import { PDFViewer } from "@react-pdf/renderer";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import React, { useRef } from "react";


const Resume = (props) => {
    const pdfContent = useRef(null);

    const handlerToCreatePdf = (e) => {
        pdfContent.current.save();
    };

    return (
        <div >
            <PDFExport ref={pdfContent} paperSize="A4">
                <div className="m-6 text-2xl text-red-600">
                    <h2 className="font-bold">{props.data}</h2>
                    <button onClick={handlerToCreatePdf} primary={true}>
                        Primary Button
                    </button>
                </div>
            </PDFExport>
        </div>
    );
};

export default Resume;
