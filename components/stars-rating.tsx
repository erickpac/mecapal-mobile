import { View } from 'react-native';
import MaterialIcon from './material-icon';

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
  color = '#FCD34D',
  maxStars = 5,
  className = '',
}: StarsRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - Math.ceil(rating);

  return (
    <View className={`flex-row items-center ${className}`}>
      {[...Array(fullStars)].map((_, index) => (
        <MaterialIcon
          key={`full-${index}`}
          name="star"
          size={size}
          color={color}
        />
      ))}

      {hasHalfStar && (
        <MaterialIcon
          key="half"
          name="star-half-full"
          size={size}
          color={color}
        />
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <MaterialIcon
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
