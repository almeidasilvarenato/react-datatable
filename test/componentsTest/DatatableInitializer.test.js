import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import { SnackbarProvider } from "notistack";
import DatatableInitializer, {
  DatatableInitializer as DatatableInitializerPureComponent
} from "../../src/components/DatatableInitializer";
import { storeSample, simpleOptionsSample } from "../../data/samples";

const mockStore = configureStore();
const store = mockStore(storeSample);
const refreshRows = jest.fn();

describe("Datatable initializer component", () => {
  it("connected should render without errors", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DatatableInitializer />
      </Provider>
    );
    expect(wrapper.find("Connect(DatatableInitializer)")).toHaveLength(1);
  });

  it("should render DatatableInitializer component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <SnackbarProvider>
          <DatatableInitializer
            optionsInit={simpleOptionsSample}
            refreshRows={refreshRows}
          />
        </SnackbarProvider>
      </Provider>
    );
    expect(wrapper.find("Connect(DatatableInitializer)")).toHaveLength(1);
  });

  describe("on mount should ", () => {
    const div = document.createElement("div");
    window.domNode = div;
    document.body.appendChild(div);

    const componentDidMount = jest.spyOn(
      DatatableInitializerPureComponent.prototype,
      "componentDidMount"
    );

    mount(
      <div style={{ width: "1000px" }}>
        <Provider store={store}>
          <SnackbarProvider>
            <DatatableInitializer
              optionsInit={simpleOptionsSample}
              refreshRows={refreshRows}
            />
          </SnackbarProvider>
        </Provider>
      </div>,
      { attachTo: window.domNode }
    );

    it("call componentDidMount", () => {
      global.innerWidth = 30000;
      global.dispatchEvent(new Event("resize"));

      expect(componentDidMount).toHaveBeenCalled();
    });

    describe("dispatch action type", () => {
      it("INITIALIZE_OPTIONS", () => {
        const action = store.getActions()[0];
        expect(action.type).toEqual("INITIALIZE_OPTIONS");
      });
      it("INITIALIZE_CUSTOM_COMPONENTS", () => {
        const action = store.getActions()[1];
        expect(action.type).toEqual("INITIALIZE_CUSTOM_COMPONENTS");
      });
      it("UPDATE_COMPONENT_SIZE", () => {
        const action = store.getActions()[2];
        expect(action.type).toEqual("UPDATE_COMPONENT_SIZE");
      });
    });
  });
});
