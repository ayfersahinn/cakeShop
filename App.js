import { useFonts } from "expo-font";
import RootStack from "./src/navigations/rootStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Figtree: require("./src/assets/fonts/Figtree-Medium.ttf"),
    FigtreeSemi: require("./src/assets/fonts/Figtree-SemiBold.ttf"),
    FigtreeBold: require("./src/assets/fonts/Figtree-Bold.ttf"),
    FigtreeExtraBold: require("./src/assets/fonts/Figtree-ExtraBold.ttf"),

    PromptLight: require("./src/assets/fonts/Prompt-Light.ttf"),
    Prompt: require("./src/assets/fonts/Prompt-Medium.ttf"),
    PromptSemi: require("./src/assets/fonts/Prompt-SemiBold.ttf"),
    PromptBold: require("./src/assets/fonts/Prompt-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <>
      <RootStack />
    </>
  );
}
