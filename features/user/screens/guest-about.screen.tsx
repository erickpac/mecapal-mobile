import { ScrollView } from 'react-native';

import { NavigationHeader } from '@/components/navigation-header';
import HowItWorks from '@/components/how-it-works';

export default function GuestAboutScreen() {
  return (
    <>
      <NavigationHeader variant="logo" />
      <ScrollView
        className="flex-1 bg-background-100"
        contentContainerClassName="pb-0"
        bounces={false}
      >
        <HowItWorks />
      </ScrollView>
    </>
  );
}
