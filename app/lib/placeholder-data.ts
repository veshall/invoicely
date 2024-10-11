// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    image_url: '/customers/rajesh-kumar.avif',
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-l2m3n4o5p6q7',
    name: 'Anita Sharma',
    email: 'anita.sharma@example.com',
    image_url: '/customers/anita-sharma.avif',
  },
  {
    id: '3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p6q7r8',
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    image_url: '/customers/vikram-singh.png',
  },
  {
    id: '4d5e6f7g-8h9i-0j1k-l2m3-n4o5p6q7r8s9',
    name: 'Priya Desai',
    email: 'priya.desai@example.com',
    image_url: '/customers/priya-desai.png',
  },
  {
    id: '5e6f7g8h-9i0j-k1l2-m3n4-o5p6q7r8s9t0',
    name: 'Rahul Mehta',
    email: 'rahul.mehta@example.com',
    image_url: '/customers/rahul-mehta.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue };
