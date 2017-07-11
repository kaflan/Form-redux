const LOAD = 'redux-form-examples/account/LOAD';
export const load = data => 
{   console.log(data);
    return {type: LOAD, data} };