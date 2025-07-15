import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

// ContentContainer - Designed to work with NavigationHeader
//
// This component handles safe areas for the main content area when used with NavigationHeader.
// NavigationHeader handles the top safe area, this handles bottom/left/right.
//
// Usage:
// <>
//   <NavigationHeader title="Screen Title" />
//   <ContentContainer className="px-4">
//     {/* Your content */}
//   </ContentContainer>
// </>
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
