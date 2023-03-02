import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { exportData, loadChangeLan, loadFile } from "../Redux/actions";
import languageOptions from "../assets/lan";
var exportDataJsonSend = null;
var fileToAPi = null;
const Upload = () => {
  const disptach = useDispatch();
  const reduxData = useSelector((state) => state);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [apiError, setApiError] = useState("");
  const [fileUploadError, setFileUploadError] = useState("");

  ///////////////////////////////////////////////////////////////////

  const fileUploadHandler = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("user_file", file);
    // console.log(formData);
    disptach(loadFile(formData));
  };
  const handleCheckboxChange = (event) => {
    const languageId = event.target.name;
    const checked = event.target.checked;

    setSelectedLanguages((prevSelected) =>
      checked
        ? [...prevSelected, languageId]
        : prevSelected.filter((id) => id !== languageId)
    );
  };
  const btnClickHandle = (e) => {
    // console.log(selectedLanguage, "Clik");
    // const textArray = reduxData.file.data.map((item) => item.Text);
    const lan = selectedLanguages.join(",");
    console.log(lan);
    
      const text = reduxData.file.data;
      console.log(text);
      disptach(loadChangeLan(text, "en", lan));
   
  };

  const btnDownloadClickHandle = (e) => {
    if (exportDataJsonSend) disptach(exportData(exportDataJsonSend));
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    
    if (
      reduxData.file &&
      reduxData.file.error &&
      reduxData.file.error.error.length > 0
    ) {
      reduxData.file.error.error ===
      "Cannot read properties of undefined (reading 'status')"
        ? setFileUploadError("Please start Backend First")
        : setFileUploadError(reduxData.file.error.error);
    }
  }, [reduxData.file]);

  useEffect(() => {
    console.log(reduxData);
    if (
      reduxData.trans &&
      reduxData.trans.translatedText &&
      reduxData.trans.translatedText.length > 0
    ) {
      exportDataJsonSend = reduxData.trans.translatedText.map((item) => {
        const translations = item.translations.reduce((acc, cur) => {
          acc[`textin${cur.to}`] = cur.text;
          return acc;
        }, {});
        return translations;
      });
      exportDataJsonSend = exportDataJsonSend.map((item, index) => {
        return { originalText: reduxData.file.data[index].Text, ...item };
      });
      console.log(exportDataJsonSend);
    }
    if (
      reduxData.trans &&
      reduxData.trans.error &&
      reduxData.trans.error.error.length > 0
    ) {
      setApiError(reduxData.trans.error.error);
    }
  }, [reduxData.trans]);

  return (
    <>
      <Paper
        elevation={6}
        style={{ backgroundColor: "#FFF" }}
        className="grid1"
        position="sticky"
        sx={{ minHeight: "80vh", minWidth: "80vw" }}
      >
        <Box m={5}>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={fileUploadHandler} />
          </Button>
        </Box>
        <Typography style={{ color: "red" }} mt={2} ml={4}>
          {" "}
          {fileUploadError ? <>{fileUploadError}</> : <></>}
        </Typography>
        {reduxData.file.data && reduxData.file.data.length > 0 ? (
          <>
            <FormGroup style={{ marginLeft: "5rem", marginRight: "5rem" }}>
              <Grid container spacing={2}>
                {languageOptions.map((option) => (
                  <>
                    {/* <Grid item lg={1}></Grid> */}
                    <Grid item lg={2} key={option.code}>
                      <FormControlLabel
                        key={option.code}
                        control={
                          <Checkbox
                            checked={selectedLanguages.includes(option.code)}
                            onChange={handleCheckboxChange}
                            name={option.code}
                          />
                        }
                        label={option.name}
                      />
                    </Grid>
                    {/* <Grid item lg={1}></Grid> */}
                  </>
                ))}
                <Grid item lg={2}></Grid>
              </Grid>
            </FormGroup>
            <Button
              sx={{ marginLeft: "2rem", marginTop: "3rem" }}
              variant="contained"
              onClick={btnClickHandle}
            >
              Translate
            </Button>
            <Typography style={{ color: "red" }} mt={2} ml={4}>
              {" "}
              {apiError ? <>{apiError}</> : <></>}
            </Typography>
          </>
        ) : (
          <></>
        )}
        {reduxData.trans.translatedText &&
        reduxData.trans.translatedText.length > 0 ? (
          <Box m={10}>
            <Button
              sx={{ marginLeft: "2rem" }}
              variant="contained"
              color="success"
              onClick={btnDownloadClickHandle}
            >
              Download File
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Paper>
    </>
  );
};

export default Upload;
