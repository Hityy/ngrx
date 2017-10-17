import { clientReducer } from './client.reducer';
import { clientInitialState } from './client.init';
import { Client } from './client.interfaces';
import { DataLoaded } from './client.actions';

describe('clientReducer', () => {
  it('should work', () => {
    const state: Client = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = clientReducer(state, action);
    expect(actual).toEqual({});
  });
});
