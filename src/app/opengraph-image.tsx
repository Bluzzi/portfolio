import { metadata } from "#source/lib/configs/metadata";
import { MetadataImage } from "#source/lib/components/metadata-image";

export const size = { height: 300, width: 600 };
export const alt = metadata.title;
export const contentType = "image/png";

export default MetadataImage;