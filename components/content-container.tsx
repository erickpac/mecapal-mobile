import React, { ReactNode, useContext } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  edges?: Edge[];
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className = '',
  edges,
}) => {
  // The bottom tab bar already accounts for the device safe area, so screens
  // nested inside the tab navigator must NOT add the bottom inset themselves
  // (would result in a doubled gap). Stack screens like auth/onboarding sit
  // above the safe area directly and need the inset.
  const tabBarHeight = useContext(BottomTabBarHeightContext);
  const isInsideTabs = tabBarHeight !== undefined;

  const resolvedEdges: Edge[] =
    edges ?? (isInsideTabs ? ['left', 'right'] : ['bottom', 'left', 'right']);

  return (
    <SafeAreaView
      className={`flex-1 bg-background-100 pb-4 ${className}`}
      edges={resolvedEdges}
    >
      {children}
    </SafeAreaView>
  );
};
