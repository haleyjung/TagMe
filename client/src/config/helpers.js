import { VISION_API_KEY, VISION_API_URL, DB_URL } from './config';

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
            maxResults: 12,
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
      const body = generateBody(image);
      const response = await fetch(VISION_API_URL, {
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
        let tagify = labels[i].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1) ).join('');
        detectedText.push(tagify);
      }
      return detectedText;
    } catch (err) {
      console.error(err);
    }
  },

  addToFirebase: async (image) => {
    try {
      const response = await fetch(DB_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(image),
      });
      const result = await response.json();
      console.log('Added to firebase:', result);
    } catch (err) {
      console.error(err);
    }
  },

  fetchFromFirebase: async () => {
    try {
      const response = await fetch(DB_URL);
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
};

export default helpers;
