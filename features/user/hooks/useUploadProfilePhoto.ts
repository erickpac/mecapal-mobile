import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useUpdateUser } from '@/features/user/hooks/useUpdateUser';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import {
  UPLOAD_CATEGORY,
  uploadService,
} from '@/features/user/services/upload';

export const useUploadProfilePhoto = () => {
  const { t } = useTranslation();
  const { showSuccess, showError } = useSnackbar();
  const { getErrorMessage } = useLocalizedError();
  const { mutateAsync: updateUser } = useUpdateUser();
  const [isUploading, setIsUploading] = useState(false);

  const pickAndUpload = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      showError(t('profile.personalInfo.photoPermissionDenied'));
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result.canceled) return;

    const asset = result.assets[0];
    const filename = asset.fileName ?? `photo-${Date.now()}.jpg`;
    const contentType = asset.mimeType ?? 'image/jpeg';

    setIsUploading(true);
    try {
      const presigned = await uploadService.getPresignedPost(
        UPLOAD_CATEGORY.PROFILE_PHOTO,
        contentType,
      );
      await uploadService.uploadWithPresignedPost(
        presigned,
        asset.uri,
        contentType,
        filename,
      );
      await updateUser({ profilePhotoUrl: presigned.fileUrl });
      showSuccess(t('profile.personalInfo.photoUploadSuccess'));
    } catch (error) {
      showError(
        getErrorMessage(error) ?? t('profile.personalInfo.photoUploadError'),
      );
    } finally {
      setIsUploading(false);
    }
  };

  return { pickAndUpload, isUploading };
};
