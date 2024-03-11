"use client";

import { useCallback, useState } from "react";
import { getFileBase64, isValidFile } from "@/libs/utils/files";
import MyImage from "./MyImage";
import {
  ISetFile,
  IUploadImage,
  ImageType,
} from "@/libs/interfaces/upload.image.interface";
import { uploadImage } from "@/libs/service/upload.image.service";
import { FiLoader } from "react-icons/fi";

export interface FileInputProps {
  max_files: number;
  max_file_size_mb: number;
  allowed_file_ext: string[];
  file_nature?: string;
  setFile: (file: ISetFile) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  src: string | null;
  setSrc: (src: string) => void;
}

export const FileInput: React.FC<FileInputProps> = ({
  setFile,
  max_files,
  allowed_file_ext,
  max_file_size_mb,
  file_nature = "photos",
  loading,
  setLoading,
  setSrc,
  src,
}) => {
  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const files = event.target.files;

        if (files) {
          setLoading(true);
          const validFiles = Array.from(files)
            .slice(0, max_files)
            .filter((file) =>
              isValidFile(file, max_file_size_mb, allowed_file_ext)
            );

          const names = validFiles.map((file) => file.name);

          const inputFiles = validFiles.map(
            async (value) => await getFileBase64(value)
          );

          const newFiles = await Promise.all(inputFiles);
          const data: IUploadImage = {
            image: newFiles[0],
            type: ImageType.profile,
          };

          const response = await uploadImage(data);

          if (response && response.status === 201) {
            const file: ISetFile = response.data;
            setSrc(file.image_url);
            setFile(file);

            setLoading(false);
          }
        }
      } catch (error) {
        setLoading(false);
      }
    },
    [src]
  );

  return (
    <div className="relative mb-2 space-y-4">
      <div className="mb-5 w-32 h-20 p-1 rounded-md border">
        <MyImage
          className="overflow-hidden rounded-md"
          alt="img"
          src={
            src
              ? src
              : "https://ik.imagekit.io/2ujnunod7moo/profile-placeholder_ALCfN7w0T.jpg?updatedAt=1709953134969"
          }
        />
      </div>
      <input
        type="file"
        className="hidden"
        id={file_nature}
        onChange={handleFileChange}
        multiple={file_nature === "photos"}
        accept={allowed_file_ext?.join(", ")}
      />

      {loading ? (
        <div className="bg-gray-900 w-32 flex items-center justify-center text-white py-2 px-4 rounded-md">
          <FiLoader className="animate-spin" />
        </div>
      ) : (
        <label
          htmlFor={file_nature}
          className="bg-gray-900 hover:bg-gray-700 cursor-pointer uppercase text-xs text-white py-2 px-4 rounded-md whitespace-nowrap"
        >
          Upload profile
        </label>
      )}
    </div>
  );
};
