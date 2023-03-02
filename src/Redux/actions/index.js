//LAN Change ACTIONS

const loadChangeLan = (text, from, to) => ({
  type: "LOAD",
  payload: { text, from, to },
});

const loadChangeLanSuc = (text) => ({
  type: "LOAD_SUC",
  payload: text,
});

const loadChangeLanFail = (error) => ({
  type: "LOAD_FAIL",
  payload: error,
});

//LOAD FILS ACTIONS
const loadFile = (file) => ({
  type: "LOAD_FILE",
  payload: file,
});

const loadFileSuc = (data) => ({
  type: "LOAD_FILE_SUC",
  payload: data,
});

const loadFileFail = (error) => ({
  type: "LOAD_FILE_FAIL",
  payload: error,
});


//JSON TO EXCEL ACTIONS
const exportData = (json) => ({
  type: "EXPORT_DATA",
  payload: json,
});
const exportDataSuc = (blob) => ({
  type: "EXPORT_DATA_SUCCESS",
  payload: blob,
});
const exportDataFail = (error) => ({
  type: "EXPORT_DATA_FAIL",
  payload: error,
});
export {
  loadChangeLan,
  loadChangeLanFail,
  loadChangeLanSuc,
  loadFile,
  loadFileSuc,
  loadFileFail,
  exportData,
  exportDataSuc,
  exportDataFail,
};
