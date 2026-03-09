Create a new screen following the project conventions. Argument: $ARGUMENTS

The argument should be in the format: `<feature> <screen-name>` (e.g., `user payment-details` or `transporter vehicle-form`)

1. **Determine the feature and screen name** from the argument
2. **Create the screen file** at `features/<feature>/screens/<screen-name>.screen.tsx`
3. **Follow existing patterns**:
   - Use `ContentContainer` or `SafeAreaView` as the root wrapper
   - Use `ScreenHeader` for the header section
   - Use `ScrollView` with `contentContainerClassName="px-4"` for scrollable content (never put `px-4` on the outer container)
   - Import icons from `@expo/vector-icons` (`MaterialCommunityIcons`)
   - Import colors from `@/consts/colors` (`COLORS`)
   - Use NativeWind/Tailwind classes for styling
   - Use `useTranslation` for any UI text
   - Export as default function
4. **Create the route file** at `features/<feature>/routes/index.ts` (if it doesn't exist) or add the new route constant to the existing one
5. **Create the Expo Router screen** at the appropriate location in `app/(app)/`

Report what was created and ask if the user wants to add any specific content to the screen.
