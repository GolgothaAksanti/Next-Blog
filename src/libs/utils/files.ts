/**
 *
 * @param {File} videoFile
 * @return {string}
 */
export const getFileBase64 = async (videoFile: File): Promise<string> => {
  const base64string = await new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) =>
      resolve((event.target?.result as string)?.split(",")[1]);
    reader.readAsDataURL(videoFile);
  });

  return base64string;
};

export const isValidFile = (
  file: File,
  max_size_mbs: number,
  allowed_ext: string[]
): boolean => {
  const allowedExtensions = allowed_ext.join(", ").includes("video")
    ? [".3gp", ".mp4", ".avi", ".mpeg"]
    : allowed_ext;

  const extension = file.name
    .toLowerCase()
    .substring(file.name.lastIndexOf("."));

  const allowedFiles = allowedExtensions.includes(extension);
  const isValidSize = file.size <= max_size_mbs * 1024 * 1024; // Convert MB to bytes
  return allowedFiles && isValidSize;
};

export const generateFileName = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
};
