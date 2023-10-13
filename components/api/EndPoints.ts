// baseURL local
const baseUrl = 'http://localhost:4242/api/gyms';
// baseURL Prod
// const baseUrl = "http://65.0.17.151:4242/api/gyms";

const login = baseUrl + '/user/login';
const logout = baseUrl + '/user/logout';
const refreshUserToken = baseUrl + '/user/refreshUserToken';
const signUp = baseUrl + '/user/signup';
const signUpWithImage = baseUrl + '/user/signup/image';
const gyms = baseUrl + '/user';
const gymsWithImage = baseUrl + '/user/image';
const packages = baseUrl + '/packages';
const deletePackages = baseUrl + '/packages/delete';
const clients = baseUrl + '/clients';
const clientsWithImage = baseUrl + '/clients/image';
const deleteClients = baseUrl + '/clients/delete';
const payments = baseUrl + '/payments';
const paymentsInvoice = baseUrl + '/payments/generate/pdf/';
const deletePayments = baseUrl + '/payments/delete';
const messages = baseUrl + '/messages';

// image URL
const clientImageUrl = clients + '/uploads/images/';
const gymImageUrl = gyms + '/uploads/images/';

export default {
  login,
  logout,
  refreshUserToken,
  signUp,
  signUpWithImage,
  gyms,
  gymImageUrl,
  gymsWithImage,
  packages,
  deletePackages,
  clients,
  clientsWithImage,
  deleteClients,
  payments,
  deletePayments,
  paymentsInvoice,
  clientImageUrl,
  messages,
};
