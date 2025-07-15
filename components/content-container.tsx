import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * A reusable container component that wraps its children in a `SafeAreaView` to ensure
 * content is displayed within the safe area boundaries of a device.
 *
 * @param {ContentContainerProps} props - The props for the ContentContainer component.
 * @param {ReactNode} props.children - The content to be rendered inside the container.
 * @param {string} [props.className] - Optional additional Tailwind CSS class names to apply to the container.
 *
 * @returns {JSX.Element} A `SafeAreaView` component with the specified children and styling.
 */
export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <SafeAreaView
      className={`flex-1 bg-background-100 ${className}`}
      edges={["bottom", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
};
