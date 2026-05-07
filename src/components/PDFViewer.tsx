import { Download } from "lucide-react";

interface PDFViewerProps {
  pdfUrl: string;
  fileName: string;
}

export const PDFViewer = ({ pdfUrl, fileName }: PDFViewerProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        title="Download PDF"
      >
        <Download className="w-4 h-4" />
        Download PDF
      </button>

      {/* PDF Viewer using iframe */}
      <div className="w-full border border-border rounded-lg overflow-hidden bg-background">
        <iframe
          src={pdfUrl}
          className="w-full h-[600px]"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};
