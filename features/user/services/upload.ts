import { api, UPLOAD_ENDPOINTS } from '@/services/api';

export const UPLOAD_CATEGORY = {
  PROFILE_PHOTO: 'profile-photos',
  PROFILE_DOCUMENT: 'profile-documents',
  VEHICLE_PHOTO: 'vehicle-photos',
  VEHICLE_DOCUMENT: 'vehicle-documents',
} as const;

export type UploadCategory =
  (typeof UPLOAD_CATEGORY)[keyof typeof UPLOAD_CATEGORY];

export interface PresignedPostResponse {
  /** S3 endpoint to POST the multipart form to. */
  url: string;
  /**
   * Form fields the client must include in the multipart body BEFORE
   * the file (signature, policy, key, Content-Type, encryption, etc.).
   */
  fields: Record<string, string>;
  /** CloudFront URL the object will have once uploaded. */
  fileUrl: string;
  expiresIn: number;
}

export const uploadService = {
  getPresignedPost: async (
    category: UploadCategory,
    contentType: string,
  ): Promise<PresignedPostResponse> => {
    const response = await api.post<PresignedPostResponse>(
      UPLOAD_ENDPOINTS.PRESIGNED_URL,
      { category, contentType },
    );
    return response.data;
  },

  /**
   * Uploads a local file to S3 using the presigned POST policy. The
   * file MUST be appended last to the form — S3 enforces that the file
   * field comes after the policy fields.
   */
  uploadWithPresignedPost: async (
    presigned: PresignedPostResponse,
    fileUri: string,
    contentType: string,
    filename: string,
  ): Promise<void> => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(presigned.fields)) {
      formData.append(key, value);
    }
    // RN's FormData accepts this object shape for files; cast required.
    formData.append('file', {
      uri: fileUri,
      name: filename,
      type: contentType,
    } as unknown as Blob);

    const response = await fetch(presigned.url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(
        `Upload failed with status ${response.status}: ${text.slice(0, 500)}`,
      );
    }
  },
};
