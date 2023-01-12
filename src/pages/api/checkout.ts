import { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../context/ShopContext';
import { stripe } from '../../lib/stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: IProduct[] };

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!products) {
    return res.status(400).json({ error: 'Price not Found' });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    submit_type: 'donate',
    success_url: successUrl,
    cancel_url: cancelUrl,

    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: product.quantity,
    })),

    shipping_address_collection: { allowed_countries: ['BR'] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: 1000, currency: 'brl' },
          display_name: 'Moto Entrega',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 1 },
            maximum: { unit: 'business_day', value: 2 },
          },
        },
      },
    ],

    phone_number_collection: {
      enabled: true,
    },
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
