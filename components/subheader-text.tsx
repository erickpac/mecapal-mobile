import { Text, View } from 'react-native';

interface Props {
  title: string;
  description?: string;
  onlyTitle?: boolean;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SubheaderText = ({
  title,
  description,
  onlyTitle = false,
  align = 'center',
  className = '',
}: Props) => {
  return (
    <View className={` items-${align} ${className}`}>
      <Text className="font-plus-jakarta-bold text-2xl font-bold">{title}</Text>
      {!onlyTitle && (
        <Text className="mt-4 text-center font-plus-jakarta text-sm">
          {description}
        </Text>
      )}
    </View>
  );
};

export default SubheaderText;
