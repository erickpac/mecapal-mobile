import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialSymbol } from "./material-symbol";

type Props = {
  uri?: string;
  showEditButton?: boolean;
  size?: number;
  sizeEditButton?: number;
  onPress?: () => void;
  className?: string;
}

const Avatar = (props: Props) => {
  return (
    <View className="relative">
      <View className={"h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gray-100 " + props.className}>
        <MaterialSymbol
          name="person"
          size={props.size || 48}
          color="text-gray-500"
          variant="rounded"
        />
      </View>
      <TouchableOpacity
        className="absolute bottom-0 right-0 h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 shadow-md"
        onPress={props.onPress}
      >
        <MaterialSymbol
          name="edit"
          size={props.sizeEditButton || 20}
          color="text-gray"
          variant="rounded"
        />
      </TouchableOpacity>
    </View>
  )
}

export default Avatar