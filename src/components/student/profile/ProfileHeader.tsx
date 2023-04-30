import Image from "next/image";
import AvatarImage from "../../../images/default.png";
import useStudent from "@/hooks/useStudent";
import PhotoModal from "./PhotoModal";
import { FilePond, registerPlugin } from "react-filepond";
import { useState } from "react";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-get-file/dist/filepond-plugin-get-file.css";
import FilePondPluginGetFile from "filepond-plugin-get-file";
import { serverUrl } from "@/constants/appConstants";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from 'filepond-plugin-image-resize';

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginGetFile,
  FilePondPluginImageCrop,
  FilePondPluginImageResize
);

const ProfileHeader: React.FC = () => {
  const { studentPersonalInfo} = useStudent();
  const [files, setFiles] = useState([]);

  const handleFileUpload = (files: any) => {
    setFiles(files);
  };

  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <Image
            className="h-auto w-full rounded-2xl mx-auto"
            src={AvatarImage}
            alt="Default Image"
            width={700}
            height={700}
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {studentPersonalInfo?.email}
        </h1>
        <PhotoModal btnName={"Nová fotka"} modalHeader={"Nahranie novej fotky"}>
          <FilePond
            files={files}
            onupdatefiles={handleFileUpload}
            allowMultiple={false}
            acceptedFileTypes={["image/*"]}
            labelIdle="Vybrať obrázok"
            server={serverUrl}
            allowImagePreview={true}
            imagePreviewMaxHeight={550}
          />
        </PhotoModal>
      </div>
    </div>
  );
};

export default ProfileHeader;
