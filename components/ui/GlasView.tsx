// // GlassView.tsx
// import React from "react";
// import { View, StyleSheet, ViewStyle } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

// interface GlassViewProps {
//   style?: ViewStyle;
//   children?: React.ReactNode;
// }

// const GlassView: React.FC<GlassViewProps> = ({ style, children }) => {
//   return (
//     <View style={[styles.container, style]}>
//       <LinearGradient
//         colors={["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)"]}
//         style={styles.gradient}
//       />
//       {children}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 15,
//     overflow: "hidden",
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     borderWidth: 1,
//     borderColor: "rgba(255, 255, 255, 0.3)",
//   },
//   gradient: {
//     ...StyleSheet.absoluteFillObject,
//     borderRadius: 15,
//   },
// });

// export default GlassView;
