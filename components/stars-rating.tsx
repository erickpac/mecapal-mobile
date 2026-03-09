import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';

interface StarsRatingProps {
  rating: number;
  size?: number;
  color?: string;
  maxStars?: number;
  className?: string;
}

const StarsRating = ({
  rating,
  size = 20,
  color = COLORS.warning,
  maxStars = 5,
  className = '',
}: StarsRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - Math.ceil(rating);

  return (
    <View className={`flex-row items-center ${className}`}>
      {[...Array(fullStars)].map((_, index) => (
        <MaterialCommunityIcons
          key={`full-${index}`}
          name="star"
          size={size}
          color={color}
        />
      ))}

      {hasHalfStar && (
        <MaterialCommunityIcons
          key="half"
          name="star-half-full"
          size={size}
          color={color}
        />
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <MaterialCommunityIcons
          key={`empty-${index}`}
          name="star-outline"
          size={size}
          color={color}
        />
      ))}
    </View>
  );
};

export default StarsRating;
