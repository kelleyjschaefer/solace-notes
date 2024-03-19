export default function errorHandler({ error }) {
    if(error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.error(error.message);
    }
    console.log(error.config);
    return null;
}