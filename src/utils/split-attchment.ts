export interface Attachment {
  id?: number;
  file?: any;
}

interface SplitResult {
  files: any[];
  ids: number[];
}

export const splitAttachment = (
  attachments: Attachment[] = []
): SplitResult => {
  const files: any[] = [];
  const ids: number[] = [];

  attachments.forEach((attachment) => {
    if (attachment.id) {
      ids.push(attachment.id);
    } else if (attachment.file) {
      files.push(attachment.file);
    }
  });

  return { files, ids };
};
