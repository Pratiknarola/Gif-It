import axios from "axios";
import download from "downloadjs";

let ROOT_URL = process.env.REACT_APP_BACKEND_ORIGIN_DEV;
if (process.env.NODE_ENV === "production") {
    ROOT_URL = process.env.REACT_APP_BACKEND_ORIGIN_PROD;
}

/**
 *
 * @param {*} params i.e. { watchUrl, seekingTime, duration }
 * @param {*} callback
 */
// const makeGif = (params, callback) => {
//     axios
//         .get(ROOT_URL + "/gifit", { params: params, responseType: "blob" })
//         .then((response) => {
//             download(response.data, "gif-it.gif", "image/gif");
//             callback();
//         })
//         .catch(function (error) {
//             alert("There was an error. Try Again.");
//             console.error("LOG: Error:", error);
//             callback();
//         });
// };

const downloadGif = (params = {}, callback) => {
    axios
        .get(ROOT_URL + "/download", { params: params, responseType: "blob" })
        .then((response) => {
            download(response.data, "gif-it.gif", "image/gif");
            callback();
        })
        .catch(function (error) {
            alert("There was an error downloading the Gif. Try Again.");
            console.error("LOG: Error in Downloading:", error);
            callback();
        });
};

export default downloadGif;
