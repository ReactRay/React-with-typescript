
export type CounterState = {
    count: number,
    status: string,
}

export const initialState: CounterState = {
    count: 0,
    status: 'pending'
}

type UpdateTypeAction = {
    type: 'increment' | 'decrement' | 'reset';
}

type SetStatusAction = {
    type: 'setStatus';
    payload: 'active' | 'inactive';
}

type CounterAction = UpdateTypeAction | SetStatusAction


export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {

        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'reset':
            return { ...state, count: 0 }
        case 'setStatus':
            return { ...state, status: action.payload }
        default: {
            const unhandledAction: never = action;
            throw new Error(`Unhandled action type: ${unhandledAction}`);
        }
    }


}