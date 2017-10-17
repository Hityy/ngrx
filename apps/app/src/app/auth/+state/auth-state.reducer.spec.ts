import { authStateReducer } from './auth-state.reducer';
import { authStateInitialState } from './auth-state.init';
import { AuthState } from './auth-state.interfaces';
import { DataLoaded } from './auth-state.actions';

describe('authStateReducer', () => {
  it('should work', () => {
    const state: AuthState = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = authStateReducer(state, action);
    expect(actual).toEqual({});
  });
});
