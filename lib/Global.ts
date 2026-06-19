// To provide Test Data and objects / elements related to whole application
import { Page } from "@playwright/test";
export class global {
  // constructor
  constructor(public page: Page) {
    this.page = page; // to initialize the page object
  }
  // test data
  public url: string = "https://ctcorphyd.com/SureshIT/login.php";
  public username: string = "sureshit";
  public password: string = "sureshit";
  
  public empFirstName: string = "srinuit";
  public empLastName: string = "srinuit";
  public editFirstName:string = "srinuitt";
  public editLastName:string = "srinuitt";


//-------------------------------------------------------------------------------------------

  // objects /elements / locators
  public textbox_username = "//input[@name='txtUserName']";
  public textbox_password = "//input[@name='txtPassword']";
  public button_login = "//input[@name='Submit']";
  public link_logout = "//a[text()='Logout']";

  // add employee 
  // page objects for this we need to switch to frame because add employee page is present inside the frame so we have to switch to that frame and then we can access the elements of that frame so for that we have to use frame locator and then we can access the elements of that frame using that frame locator
  public switch_frame = "//iframe[@name='rightMenu']";
  public button_add = "//input[@value='Add']";
  public textbox_empFirstName = "//input[@name='txtEmpFirstName']";
  public textbox_empLastName = "//input[@name='txtEmpLastName']";
  public textbox_empId = "//input[@id='txtEmployeeId']";
  public button_save = "//input[@value='Save']";

  // edit employee
  public select_dropdown = "//select[@id='loc_code']";
  public textbox_searchForTextbox ="//input[@name='loc_name']";
  public button_search = "Search";
  public button_edit = "//input[@vale='Edit']";
  public button_back = "//input[@vale='Back']"
}
