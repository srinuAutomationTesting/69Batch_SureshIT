// To provide all re-usable functions / methods related to whole application

import { expect } from "@playwright/test";
import { global } from "./global";
export class general extends global {
  // user defined functions

  // open application
  public async openapplication() {
    await this.page.goto(this.url);
    console.log("Application is opened");
  }

  // login to application
  public async login() {
    await this.page.locator(this.textbox_username).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login to application");
  }

  // logout from application
  public async logout() {
    await this.page.locator(this.link_logout).click();
    console.log("Logout from application");
  }

  // Add New Employee
  public async addEmployee() {
    const frame = this.page.frameLocator(this.switch_frame);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_empFirstName).fill(this.empFirstName);
    await frame.locator(this.textbox_empLastName).fill(this.empLastName);
    await frame.locator(this.button_save).click();
    console.log("New Employee is added");
  }

  public async saveEmpId(){
    const savedEmpId = await this.page.locator(this.textbox_empId).inputValue();
    console.log("EmpId is: "+savedEmpId);
    return savedEmpId;
  }

  public async displayEmpFirstName(){
    const saveEmpFirstName = await this.page.locator(this.empFirstName).inputValue();
    console.log("EsavedEmpIdmpId firstName: "+saveEmpFirstName);
    return saveEmpFirstName;
    
  }
  // wait time
  public async waitTime() {
    await this.page.waitForTimeout(3000); // why this.page means because we have assigned page value to this.page in constructor of global class and general class is child class of global class so we can access that page variable in general class using this.page and this.page means current page which is opened by playwright when we run the test case
  }

  // Edit Employee
  public async editEmployee(){
    const savedEmpId = await this.saveEmpId();
    const frame = this.page.frameLocator(this.switch_frame);
    await frame.locator(this.select_dropdown).selectOption("Emp. ID");
    await frame.locator(this.textbox_searchForTextbox).fill(savedEmpId);
    await frame.getByRole('button',{name:this.button_search}).click();
    await frame.locator(`//td[text()='${savedEmpId}']//following-sibling::td/a`).click();
    await frame.locator(this.button_edit).click();
    await frame.locator(this.textbox_empFirstName).fill(this.editFirstName);
    await frame.locator(this.textbox_empLastName).fill(this.editLastName);
    await frame.locator(this.button_save).click();
    await frame.locator(this.button_back).click();
  }
  public async verifyDisplayEmployee() {
     const saveEmpFirstName = await this.displayEmpFirstName();
     const savedEmpId = await this.saveEmpId();
    const frame = this.page.frameLocator(this.switch_frame);
    await frame.locator(this.select_dropdown).selectOption("Emp. ID");
    await frame.locator(this.textbox_searchForTextbox).fill(savedEmpId);
    await frame.getByRole('button',{name:this.button_search}).click();
    await expect(frame.locator(`//a[text()='${saveEmpFirstName}']`)).toBeVisible();
   const displayedName = await frame
    .locator(`//td[text()='${savedEmpId}']/following-sibling::td/a`).textContent();
    expect(displayedName?.trim()).toBe(saveEmpFirstName);
    console.log(displayedName);
  }

}
