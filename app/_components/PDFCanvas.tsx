// app/_components/PDFCanvas.tsx
"use client";

import {FC, useEffect, useRef} from "react";
import getPDFDocument from "../_utils/getPDFDocument";
import createPDFPage from "../_utils/createPDFPage";
import renderPDFToCanvas from "../_utils/renderPDFToCanvas";

type Props = {
    file: string
}
export const PDFCanvas: FC<Props> = ({file}) => {
    const ref = useRef<HTMLDivElement>(null);

    const renderPDF = async () => {
        // PDF Path or URL
        console.log(window.location.origin)
        const url = window.location.origin + "/static/" + file;

        // Page number you want to render
        const pageNumber = 1;

        // Fetch the PDF
        const pdfDocument = await getPDFDocument(url);

        // Get the PDF page
        const pdfPage = await createPDFPage(pdfDocument as any, pageNumber);

        // Get the viewport of the page to extract sizes
        const viewport = pdfPage.getViewport({ scale: 1 });
        const { height, width } = viewport;

        // Create the canvas
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        // Render the pdf to canvas
        const pdfCanvas = await renderPDFToCanvas(pdfPage, canvas);

        // then add the canvas with pdf to the div element
        ref.current?.replaceChildren(pdfCanvas)
    };

    useEffect(() => {
        renderPDF();
    }, []);

    return <div ref={ref}></div>;
};