"use client";
import HackerBtn from "./animation/HackerBtn";

function DownLoadResumeBtn() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sarandeep_Singh_Resume.pdf"; // make sure resume.pdf is in /public folder
    link.download = "Sarandeep_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn label="Download Resume" onClick={handleDownload} />
    </div>
  );
}

export default DownLoadResumeBtn;
