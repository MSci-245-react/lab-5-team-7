export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants = () => async (dispatch, getState, api) => {
    const records = await api.loadRestaurants();
    console.log(records)
    dispatch(storeRestaurants(records));
  };

  const storeRestaurants = records => ({
    type: STORE_RESTAURANTS,
    records,
  });