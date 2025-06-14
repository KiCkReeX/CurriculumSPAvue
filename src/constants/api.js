const api = {
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  debounceWaitTime: 300,
  endPoints: {
    Beneficiary: {
      PostBeneficiary: '/Beneficiary',
      GetBeneficiaryByCustomer: (Id) => `Beneficiary/customer/${Id}`,
      PutBeneficiary: (Id) => `/Beneficiary/${Id}`,
      DeleteBeneficiary: (Id) => `/Beneficiary/${Id}`,
      //Beneficiares
    },
    Email: {
      Send: '/Messages/create-message',
    },
  },
}

export default api
