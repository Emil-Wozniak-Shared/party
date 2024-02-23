// app/_utils/getPDFDocument.tsx
import type { PDFDocumentProxy } from 'pdfjs-dist';
import {pdfjs, Document, Page} from 'react-pdf'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
// this function takes an argument we named path that
// can be a path to the file or can be an external link
// that contains the PDF
const getPDFDocument = async (path: string) => {
    pdfjs.GlobalWorkerOptions.workerSrc =
        window.location.origin + "/pdf.worker.min.js";

    return new Promise((resolve, reject) => {
        pdfjs
            .getDocument(path)
            .promise.then((document: any) => {
            resolve(document);
        })
            .catch(reject);
    });
};

export default getPDFDocument