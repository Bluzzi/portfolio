import { metadataImage } from "#source/lib/components/metadata-image";

export const loader = async (): Promise<Response> => {
  return metadataImage();
};
