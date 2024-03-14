export const isValidImageUrl = (url: string): boolean => {
  const urlPattern: RegExp = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url) && url.includes("imagekit.io");
};
