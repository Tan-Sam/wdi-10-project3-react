import { GET_PRODUCTS } from '../constants';

export function productsReducer(state = {
    products: [
      {
        id: 1,
        title: 'Wontan Noodle',
        url: 'http://danielfooddiary.com/wp-content/uploads/2012/04/namseng1.jpg'
      },
      {
        id: 2,
        title: 'Fried Fish',
        url: 'http://c0421832.cdn.cloudfiles.rackspacecloud.com/album/2965/600.jpg'
      },
      {
        id: 3,
        title: 'chicken wing',
        url: 'http://esq.h-cdn.co/assets/cm/15/07/54dae360ac131_-_ocean-dragon-wings-0209-lg.jpg'
      },
    ]
  }, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: [...state.products]
      };
      break;
    default:
  }

  return state;
}
