const subscriptionKey ="ENTER_THE_KEY";

const endpoint = "https://api.cognitive.microsofttranslator.com";

const changeLan = async ({ text, from, to }) => {
  const url = `${endpoint}/translate?api-version=3.0&to=${to}`;
  const headers = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": subscriptionKey,
    "Ocp-Apim-Subscription-Region": "southeastasia",
  };
  const body = text;
  console.log({ url, headers, body });
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (response.status >= 400) {
      throw new Error(response.error);
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error(error);
  }
  // const response = await fetch(`${URL}&q=${text}&target=${to}`);

  // const data = await response.json();
  // // console.log(data);
  // if (response.status >= 400) {
  //   throw new Error(data.errors);
  // }
  // return data;
};
const fileUpload = async (action) => {
  // console.log(action);
  const response = await fetch("http://localhost:3001/upload", {
    method: "POST",
    body: action,
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
  console.log(response);
  if (response.status >= 400) {
    throw new Error(response.error);
  }
  return response;
};
const fileDownlod = async (action) => {
  const response = await fetch("http://localhost:3001/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(action),
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.xlsx";
      a.click();
    })
    .catch((error) => console.error(error));
  if (response.status >= 400) {
    throw new Error(response.error);
  }
  console.log("RESPONSE", response);
  return response;
};

export { changeLan, fileUpload, fileDownlod };
