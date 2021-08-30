import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Sanseveria",
      caption:
        "Sicke plant, toch.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

      price: 15.0,
      images: {
        main: { 
            id: 1,
            url: "../assets/images/sanseveria_main.jpg"
          },
        details: [{
          imageId: 1,
          url: "../assets/images/sanseveria_main.jpg",
        },
        {
          imageId: 2,
          url: "../assets/images/sanseveria_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/sanseveria_detail2.jpg"
        },
        {
          imageId: 4,
          url: "../assets/images/sanseveria_detail3.jpg"
        }
      ]},
      productDetails: {
        width: 20,
        height: 40,
        benefits: "aircleaner",
        shade: "sunny"
      }
    },
      {
      id: 2,
      title: "Philodendron Scandens",
      caption:
        "Deze moet je hebben.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

      price: 20.0,
      images: {
        main: { 
            ImageId: 1,
            url: "../assets/images/philo_scandens_main.jpg"
          },
        details: [
          {
          imageId: 1,
          url: "../assets/images/philo_scandens_main.jpg",
        },
        {
          imageId: 2,
          url: "../assets/images/philo_scandens_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/philo_scandens_detail2.jpg"
        },
        {
          imageId: 4,
          url: "../assets/images/philo_scandens_detail3.jpg"
        }
      ]}
    },
    {
      id: 3,
      title: "Monstera",
      caption:
        "Koop deze.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

      price: 25,
      images: {
        main: { 
          imaggeId: 1,
            url: "../assets/images/monstera_main.jpg"
          },
        details: [{
          imageId: 1,
          url: "../assets/images/monstera_main.jpg",
        },
        {
          imageId: 2,
          url: "../assets/images/monstera_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/monstera_detail2.jpg"
        },
        {
          imageId: 4,
          url: "../assets/images/monstera_detail3.jpg"
        }
      ]}
    },
    {
      id: 4,
      title: "Scindapsus Pictus",
      caption:
        "Koop deze ook.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

      price: 15,
      images: {
        main: { 
          imageId: 1,
            url: "../assets/images/scindapsus_pictus_main.jpg"
          },
        details: [{
          imageId: 1,
          url: "../assets/images/scindapsus_pictus_main.jpg",
        },
        {
          imageId: 2,
          url: "../assets/images/scindapsus_pictus_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/scindapsus_pictus_detail2.jpg"
        },
        {
          imageId: 4,
          url: "../assets/images/scindapsus_pictus_detail3.jpg"
        }
      ]}
    },
    {
      id: 5,
      title: "Cactus Trio",
      caption:
        "Heel cute zijn deze.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

      price: 10,
      images: {
        main: { 
          imageId: 1,
            url: "../assets/images/cactus_trio_main.jpg"
          },
        details: [{
          imageId: 1,
          url: "../assets/images/cactus_trio_main.jpg",
        },
        {
          imageId: 2,
          url: "../assets/images/cactus_trio_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/cactus_trio_detail2.jpg"
        },
        {
          imageId: 4,
          url: "../assets/images/cactus_trio_detail3.jpg"
        }
      ]}
    },
    {
      id: 6,
      title: "Hoya Kerri",
      caption:
        "Koop deze.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

      price: 25,
      images: {
        main: { 
          imageId: 1,
            url: "../assets/images/hoya_kerri_main.jpg"
          },
        details: [
          { 
            imageId: 1,
              url: "../assets/images/hoya_kerri_main.jpg"
            }, 
          {
          imageId: 2,
          url: "../assets/images/hoya_kerri_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/hoya_kerri_detail2.jpg"
        },
      ]}
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};





export default shopReducer;
