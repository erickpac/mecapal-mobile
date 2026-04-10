import React, { ReactNode } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  edges?: Edge[];
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className = '',
  edges = ['bottom', 'left', 'right'],
}) => {
  return (
    <SafeAreaView
      className={`flex-1 bg-background-100 pb-4 ${className}`}
      edges={edges}
    >
      {children}
    </SafeAreaView>
  );
};
