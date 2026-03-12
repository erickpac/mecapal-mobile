Create a new screen following the project conventions. Argument: $ARGUMENTS

The argument should be in the format: `<feature> <screen-name>` (e.g., `user payment-details` or `transporter vehicle-form`)

1. **Determine the feature and screen name** from the argument
2. **Create the screen file** at `features/<feature>/screens/<screen-name>.screen.tsx`
3. **Follow existing patterns**:
   - Use `NavigationHeader` (`@/components/navigation-header`) for the header section
   - Use `ContentContainer` (`@/components/content-container`) as the root wrapper below `NavigationHeader` — it provides `SafeAreaView` with `pb-4` and `bg-background-100`
   - Use `ScrollView` with `contentContainerClassName="px-4"` for scrollable content — padding goes on the scroll content, NOT on `ContentContainer`
   - For screens with forms/inputs, wrap content in `KeyboardAvoidingView` with `behavior={Platform.OS === 'ios' ? 'padding' : undefined}`
   - For screens with a bottom action button, place the `Button` outside the `ScrollView` but inside `ContentContainer`, wrapped in `<View className="px-4">`
   - Import icons from `@expo/vector-icons` (`MaterialCommunityIcons`)
   - Import colors from `@/consts/colors` (`COLORS`)
   - Use NativeWind/Tailwind classes for styling
   - Use `useTranslation` for any UI text
   - Export as default function

**Screen structure templates:**

Simple screen (read-only content):

```tsx
<>
  <NavigationHeader title="" showBackButton={true} borderBottom={false} />
  <ContentContainer>
    <ScrollView contentContainerClassName="px-4">{/* content */}</ScrollView>
  </ContentContainer>
</>
```

Form screen (with inputs and bottom button):

```tsx
<>
  <NavigationHeader title="" showBackButton={true} borderBottom={false} />
  <ContentContainer>
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerClassName="px-4" bounces={false}>
        {/* form fields */}
      </ScrollView>
    </KeyboardAvoidingView>
    <View className="px-4">
      <Button title="..." onPress={handleSubmit} fullWidth />
    </View>
  </ContentContainer>
</>
```

4. **Create the route file** at `features/<feature>/routes/index.ts` (if it doesn't exist) or add the new route constant to the existing one
5. **Create the Expo Router screen** at the appropriate location in `app/(app)/`

Report what was created and ask if the user wants to add any specific content to the screen.
