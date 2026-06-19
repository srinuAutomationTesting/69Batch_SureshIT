import {test} from '@playwright/test';
import {general} from '../lib/General';

test('TC002: HRMS Add Employee', async({page})=>{
    // test steps
    // create object for general class
   const gen = new general(page);
   await gen.openapplication();
   await gen.login();
   await gen.waitTime();
   await gen.addEmployee();
   await gen.waitTime()
   await gen.editEmployee();
   await gen.verifyDisplayEmployee();
   await gen.logout();

});