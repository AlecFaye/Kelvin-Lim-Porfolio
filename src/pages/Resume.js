import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import gameDevResumeURL from "../assets/pdfs/unity_resume.pdf";

const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    
    return (
        <div>
            <NavigationBar isHomePage={ false } />
            <div className="resume">
                <Document file={ gameDevResumeURL }>
                    <Page 
                        pageNumber={ 1 } 
                        scale={ 1.5 }
                        renderAnnotationLayer={ false } 
                        renderTextLayer={ false } />
                </Document>
            </div>
            <Footer />
        </div>
    );
};

export default Resume;
