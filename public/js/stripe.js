/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = require('stripe')(
  'pk_test_51M10dOSDg3PWxEyl8DpePO2cjaLdIkCiu7owOQYpXZosyVwAdZfhOhVaR1p38wSbyira80qc8w1inGvr9mQfx8n9005tLm5lDU'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2) Create checkout form + charge credit card
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
