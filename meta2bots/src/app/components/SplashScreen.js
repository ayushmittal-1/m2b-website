// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function SplashScreen({ onFinish }) {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//       onFinish();
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   if (!visible) return null;

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black">
//       <Image
//         src="/meta2botsimage.png" // Ensure the image is inside the public folder
//         alt="Meta2bots Logo"
//         width={300}
//         height={300}
//         className="animate-fade"
//       />
//     </div>
//   );
// }
