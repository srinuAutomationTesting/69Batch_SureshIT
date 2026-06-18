import {test} from '@playwright/test';
import { general } from '../lib/General';

test.describe('Test Suite for HRMS Application', () => {

   test('TC001: HRMS Login and Logout', async({page})=>{
       // create object for general class
      const gen = new general(page);
      // const gen = new general(page); // general(page) => constructor(page) whenever we create object for general class constructor called by default and page value will be passed to constructor and constructor will assign that page value to this.page variable and we can use that page variable in general class methods
      await gen.openapplication();
      await gen.login();
      await gen.logout();
   });

   test('TC002: HRMS Add Employee', async({page})=>{
        // test steps
        // create object for general class
        const gen = new general(page);
        await gen.openapplication();
        await gen.login();
        await gen.waitTime();
        await gen.addEmployee();
        await gen.logout();

    });

});