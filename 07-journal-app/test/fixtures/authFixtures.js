export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
  photoUrl: null,
};

export const demoUser = {
  uid: "123ABC",
  email: "email@google.com",
  displayName: "Demo user",
  photoUrl: "https://api.dicebear.com/9.x/thumbs/svg?seed=Demo%20user",
};


export const authenticatedState = {
  status: "authenticated",
  ...demoUser,
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
  photoUrl: null,
};