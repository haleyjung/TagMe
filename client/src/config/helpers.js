const API_KEY = 'AIzaSyCjvz_xYNBom3i5bDCumA4m3sucMf3K6DQ';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

function generateBody(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          // {
          //   type: 'TEXT_DETECTION',
          //   maxResults: 5,
          // },
          {
            type: 'LABEL_DETECTION',
            maxResults: 10,
          },
        ],
      },
    ],
  };
  return body;
}

const helpers = {
  callGoogleVisionAsync: async (image) => {
    try {
      const body = generateBody(image); //pass in our image for the payload
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      const labels = result.responses[0].labelAnnotations;
      const detectedText = [];

      for (let i = 0; i < labels.length; i++) {
        detectedText.push(labels[i].description);
      }

      console.log('detectedText: ', detectedText)
      return detectedText
      ? detectedText
      : { err: "Error!" };
    } catch (err) {
      console.error(err);
    }
  },

  addToFirebase: async (image) => {
    try {
      console.log('add to firebase!');
    } catch (err) {
      console.error(err);
    }
  }
}

export default helpers;
