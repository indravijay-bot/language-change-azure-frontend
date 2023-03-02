// import React, { useEffect, useState } from "react";

// import {
//   Box,
//   Select,
//   MenuItem,
//   Paper,
//   TextField,
//   InputLabel,
//   Typography,
//   Button,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { loadChangeLan, loadFile } from "../Redux/actions";

// const Main = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en");
//   const [inputText, setInputText] = useState("");
//   const [error, setError] = useState("");
//   const disptach = useDispatch();
//   const reduxData = useSelector((state) => state);
 
// console.log(reduxData);
//   useEffect(() => {
//     if (
//       reduxData.trans.translatedText &&
//       reduxData.trans.translatedText.data.translations[0].translatedText.length > 0
//     ) {
//       console.log(reduxData.trans.translatedText.data.translations[0].translatedText)
//       setInputText(reduxData.trans.translatedText.data.translations[0].translatedText);
//     } else if (reduxData.trans.error.error !== "") {
//       setError(reduxData.trans.error.error);
//       setInputText("");
//       setSelectedLanguage("en");
//     }
//   }, [reduxData.trans.translatedText, reduxData.trans.error]);

//   const lanChange = (e) => {
//     if (inputText.length > 0) {
//       disptach(loadChangeLan(inputText, selectedLanguage, e.target.value));
//     }
//     setSelectedLanguage(e.target.value);
//   };

//   return (
//     <div>
//       <Paper
//         elevation={6}
//         style={{ backgroundColor: "#FFF" }}
//         className="grid1"
//         position="sticky"
//         sx={{ minHeight: "80vh", minWidth: "80vw" }}
//       >
//         <Box
//           sx={{
//             paddingTop: "2rem",
//             display: "flex",
//             justifyContent: "right",
//             marginRight: "5rem",
//           }}
//         >
//           <InputLabel
//             id="demo-select-small"
//             sx={{ marginRight: "1.7rem", fontSize: "1.2rem" }}
//           >
//             Select Language
//           </InputLabel>
//           <Select
//             labelId="demo-select-small"
//             id="demo-select-small"
//             value={selectedLanguage}
//             label="SelectLanguage"
//             size="small"
//             sx={{ height: "2rem", width: "15rem" }}
//             onChange={lanChange}
//           >
//             <MenuItem value="en">English</MenuItem>
//             <MenuItem value="hi">Hindi</MenuItem>
//             <MenuItem value="fr">French</MenuItem>
//             <MenuItem value="mr">Marathi</MenuItem>
//             <MenuItem value="gu">Gujarati</MenuItem>
//           </Select>
//         </Box>
//         <Box sx={{ p: 10 }}>
//           <TextField
//             placeholder="Enter your Text"
//             multiline
//             rows={6}
//             sx={{ minWidth: "60rem" }}
//             value={inputText}
//             disabled={reduxData.trans.isLoading}
//             onChange={(e) => {
//               setInputText(e.target.value);
//               setError("");
//             }}
//           />
//         </Box>
//         <Box>
//           {error ? (
//             <Typography sx={{ color: "Red" }} variant="h7">
//               {error}
//             </Typography>
//           ) : (
//             <></>
//           )}
//         </Box>
//       </Paper>
     
//     </div>
//   );
// };

// export default Main;
