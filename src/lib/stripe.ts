import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPER_SECRET_KEY, {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'ignite shop',
  },
});
