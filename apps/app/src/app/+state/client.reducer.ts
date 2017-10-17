import { Client } from './client.interfaces';
import { ClientAction } from './client.actions';

export function clientReducer(state: Client, action: ClientAction): Client {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
