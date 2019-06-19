import * as actions from "../../../src/redux/actions/datatableActions";
import { simpleOptionsSample } from "../../../data/samples";

describe("Datatable actions should create an action to", () => {
  it("initialize options", () => {
    const payload = simpleOptionsSample;
    const expectedAction = {
      type: "INITIALIZE_OPTIONS",
      payload
    };
    expect(actions.initializeOptions(payload)).toEqual(expectedAction);
  });

  it("update options", () => {
    const payload = simpleOptionsSample;
    const expectedAction = {
      type: "UPDATE",
      payload
    };
    expect(actions.updateOptions(payload)).toEqual(expectedAction);
  });

  it("update component size", () => {
    const expectedAction = {
      type: "UPDATE_COMPONENT_SIZE"
    };
    expect(actions.updateComponentSize()).toEqual(expectedAction);
  });

  it("sort columns", () => {
    const columnsOrder = ["id", "age", "name", "adult"];
    const payload = { columnsOrder, oldIndex: 0, newIndex: 2 };
    const expectedAction = {
      type: "SORT_COLUMNS",
      payload
    };
    expect(actions.sortColumns(payload)).toEqual(expectedAction);
  });

  it("set rows per page", () => {
    const payload = 25;
    const expectedAction = {
      type: "SET_ROWS_PER_PAGE",
      payload
    };
    expect(actions.setRowsPerPage(payload)).toEqual(expectedAction);
  });

  it("set page", () => {
    const payload = 2;
    const expectedAction = {
      type: "SET_PAGE",
      payload
    };
    expect(actions.setPage(payload)).toEqual(expectedAction);
  });

  it("set scrolling", () => {
    const payload = true;
    const expectedAction = {
      type: "SET_IS_SCROLLING",
      payload
    };
    expect(actions.setIsScrolling(payload)).toEqual(expectedAction);
  });

  it("add a row to edited", () => {
    const payload = {
      index: 0,
      id: "5cd9307025f4f0572995990f",
      name: "Hunt Valdez",
      age: 2,
      adult: false,
      birthDate: "2017-06-02T11:22",
      iban: "",
      eyeColor: "green"
    };
    const expectedAction = {
      type: "ADD_ROW_EDITED",
      payload
    };
    expect(actions.addRowEdited(payload)).toEqual(expectedAction);
  });

  it("set an edited row", () => {
    const payload = {
      columnId: "age",
      rowId: "5cd9307025f4f0572995990f",
      newValue: 50,
      error: false
    };
    const expectedAction = {
      type: "SET_ROW_EDITED",
      payload
    };
    expect(actions.setRowEdited(payload)).toEqual(expectedAction);
  });

  it("save a row", () => {
    const payload = {
      index: 0,
      id: "5cd9307025f4f0572995990f",
      name: "Hunt Valdez",
      age: 2,
      adult: false,
      birthDate: "2017-06-02T11:22",
      iban: "",
      eyeColor: "green",
      idOfColumnErr: [],
      hasBeenEdited: true
    };
    const expectedAction = {
      type: "SAVE_ROW_EDITED",
      payload
    };
    expect(actions.saveRowEdited(payload)).toEqual(expectedAction);
  });

  it("revert changes on a row", () => {
    const payload = {
      index: 0,
      id: "5cd9307025f4f0572995990f",
      name: "Hunt Valdez",
      age: 2,
      adult: false,
      birthDate: "2017-06-02T11:22",
      iban: "",
      eyeColor: "green",
      idOfColumnErr: [],
      hasBeenEdited: true
    };
    const expectedAction = {
      type: "REVERT_ROW_EDITED",
      payload
    };
    expect(actions.revertRowEdited(payload)).toEqual(expectedAction);
  });

  it("delete a row", () => {
    const payload = {
      index: 0,
      id: "5cd9307025f4f0572995990f",
      name: "Hunt Valdez",
      age: 2,
      adult: false,
      birthDate: "2017-06-02T11:22",
      iban: "",
      eyeColor: "green"
    };
    const expectedAction = {
      type: "DELETE_ROW",
      payload
    };
    expect(actions.deleteRow(payload)).toEqual(expectedAction);
  });

  it("select a row", () => {
    const payload = {
      checked: true,
      row: {
        index: 0,
        id: "5cd9307025f4f0572995990f",
        name: "Hunt Valdez",
        age: 2,
        adult: false,
        birthDate: "2017-06-02T11:22",
        iban: "",
        eyeColor: "green"
      }
    };
    const expectedAction = {
      type: "SELECT_ROW",
      payload
    };
    expect(actions.selectRow(payload)).toEqual(expectedAction);
  });

  it("select a row", () => {
    const payload = [];
    const expectedAction = {
      type: "SET_ROWS_SELECTED",
      payload
    };
    expect(actions.setRowsSelected(payload)).toEqual(expectedAction);
  });

  it("search data", () => {
    const payload = "Hunt";
    const expectedAction = {
      type: "SEARCH",
      payload
    };
    expect(actions.search(payload)).toEqual(expectedAction);
  });

  it("set visibility of column", () => {
    const payload = simpleOptionsSample.data.columns[0];
    const expectedAction = {
      type: "SET_COLUMN_VISIBILITY",
      payload
    };
    expect(actions.setColumnVisibilty(payload)).toEqual(expectedAction);
  });

  it("toggle snackbar", () => {
    const payload = true;
    const expectedAction = {
      type: "TOGGLE_SNACKBAR",
      payload
    };
    expect(actions.toggleSnackbar(payload)).toEqual(expectedAction);
  });

  it("set user configuration", () => {
    const payload = {
      copyToClipboardState: true,
      columnsOrderState: ["id", "age", "name", "adult"],
      type: "save"
    };
    const expectedAction = {
      type: "SET_USER_CONFIGURATION",
      payload
    };
    expect(actions.setUserConfiguration(payload)).toEqual(expectedAction);
  });
});
