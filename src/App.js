// import React, { useState } from "react";
// import Title from "./components/Title";
// import UploadForm from "./components/UploadForm";
// import ImageGrid from "./components/ImageGrid";
// import Modal from "./components/Modal";
// import SignIn from "./components/SignIn";

// function App() {
//   const [selectedImg, setSelectedImg] = useState(null);

//   return (
//     <div className="App">
//       <Title />
//       <UploadForm />
//       <ImageGrid setSelectedImg={setSelectedImg} />
//       {selectedImg && (
//         <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
//       )}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
