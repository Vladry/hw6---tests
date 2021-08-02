import loadReducer from './reducers';
import {initialState} from './reducers';

describe("our reducers test", ()=>{
    test("initialization test", ()=>{
        const initState = loadReducer(initialState, {type: "@@INIT"});
        expect(initState).toStrictEqual(initialState);
    });
    it("checks the receipt of serverData", ()=>{
        const serverSessionState = loadReducer(initialState, {type: "LOAD_SERVER_DATA"});
        expect(serverSessionState).toEqual(expect.objectContaining({serverData: []}));
        console.log("serverSessionState: ", serverSessionState);
    });

});