// Writes text through the async Clipboard API, resolving to whether the write actually
// succeeded. Permission failures are expected outcomes, so the promise never rejects:
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  }
  catch {
    return false;
  }
};
