/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getHeaderDataItem = data => dispatch => dispatch({ type: 'POST_HEADER_DATA_ITEM', payload: data });

export default getHeaderDataItem;
