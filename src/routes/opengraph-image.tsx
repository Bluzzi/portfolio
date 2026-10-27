import { metadataImage } from "#/lib/components/metadata-image";

export const loader = async (): Promise<Response> => {
  return metadataImage();
};
