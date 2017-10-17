export interface AuthState {
  // define state here
  authenticated: boolean;
  token: string;
}

export interface AuthStateState {
  readonly authState: AuthState;
}
