import {
  title,
  dimensions,
  keyColumn,
  font,
  data,
  columnAction,
  userConfiguration,
  pagination,
  rowsEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  orderBy,
  searchTerm,
  features
} from "./optionsObjectSample";

const mergedSimpleOptionsSample = {
  title,
  dimensions: {
    ...dimensions,
    datatable: {
      ...dimensions.datatable,
      totalWidthNumber: 0
    }
  },
  data: {
    ...data,
    columns: [columnAction, ...data.columns]
  },
  pagination: {
    ...pagination,
    rowsCurrentPage: data.rows
  },
  keyColumn,
  font,
  rowsEdited,
  refreshRows,
  isRefreshing,
  orderBy,
  searchTerm,
  rowsSelected,
  actions: null,
  features: {
    ...features,
    userConfiguration: {
      ...userConfiguration,
      columnsOrder: ["actions", ...userConfiguration.columnsOrder]
    },
    additionalIcons: []
  }
};

export default mergedSimpleOptionsSample;