import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
      {
        id: 11,
        category: "plants",
        title: "Sanseveria",
        caption:
          "Sicke plant, toch.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
        price: 15,
        featured: false,
        details: {
            height: 50,
            width: 10,
            position: "sunny"
        },
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
          ]
        },
      },
      {
        id: 12,
        category: "plants",
        title: "Philodendron Scandens",
        caption:
          "Kijk hoe mooi.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
        price: 15,
        featured: false,
        details: {
          height: 50,
          width: 10,
          position: "shade"
      },
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
          ]
        }
      },
      {
        id: 13,
        category: "plants",
        title: "Monstera",
        caption:
          "Koop deze.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
        price: 25,
        featured: false,
        details: {
          height: 50,
          width: 10,
          position: "sunny"
      },
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
          ]
        }
      },
      {
        id: 14,
        category: "plants",
        title: "Scindapsus Pictus",
        caption:
          "Koop deze ook.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
        price: 15,
        featured: false,
        details: {
          height: 50,
          width: 20,
          position: "shade"
      },
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
          ]
        }
      },
      {
        id: 15,
        category: "plants",
        title: "Cactus Trio",
        caption:
          "Leuk cadeautje voor je nichtje",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
        price: 10,
        featured: false,
        details: {
          height: 50,
          width: 5,
          position: "sunny"
      },
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
          ]
        }
      },
      {
        id: 16,
        category: "plants",
        title: "Hoya Kerri",
        caption:
          "Koop deze.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
        price: 10,
        featured: true,
        details: {
          height: 50,
          width: 10,
          position: "shade"
      },
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
          ]
        }
  },
 

  {
    id: 21,
    category: "driedflowers",
    title: "Eryngium",
    caption:
      "Koop deze ook.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: 5,
    featured: true,
    details: {
      height: 50,
      width: 10,
      position: ""
  },
    images: {
      main: {
        imageId: 1,
        url: "../assets/images/eryngium_strauss_main.jpg"
      },
      details: [
        {
          imageId: 1,
          url: "../assets/images/eryngium_strauss_main.jpg"
        },
        {
          imageId: 2,
          url: "../assets/images/eryngium_strauss_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/eryngium_strauss_detail2.jpg"
        },
      ]
    }
  },
  {
    id: 22,
    category: "driedflowers",
    title: "Moby Dick",
    caption:
      "Leuk voor je moeder.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: 5,
    details: {
      height: 50,
      width: 10,
      position: ""
  },
    images: {
      main: {
        imageId: 1,
        url: "../assets/images/mobydick_strauss_main.jpg"
      },
      details: [
        {
          imageId: 1,
          url: "../assets/images/mobydick_strauss_main.jpg"
        },
        {
          imageId: 2,
          url: "../assets/images/mobydick_strauss_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/mobydick_strauss_detail2.jpg"
        },
      ]
    }
  },
  {
    id: 23,
    category: "driedflowers",
    title: "Setaria",
    caption:
      "Koop deze.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: 5,
    featured: false,
    details: {
      height: 50,
      width: 10,
      position: ""
  },
    images: {
      main: {
        imageId: 1,
        url: "../assets/images/setaria_main.jpg"
      },
      details: [
        {
          imageId: 1,
          url: "../assets/images/setaria_main.jpg"
        },
        {
          imageId: 2,
          url: "../assets/images/setaria_detail1.jpg",
        },
        {
          imageId: 3,
          url: "../assets/images/setaria_detail2.jpg"
        },
      ]
    }





},


  {
    id: 31,
    category: "accessoires",
    title: "Growing Lamp",
    caption:
      "Heel handig voor je mini stekjes.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: 10,
    featured: false,
    details: {
      height: 50,
      width: 10,
      position: ""
  },
    images: {
      main: {
        imageId: 1,
        url: "../assets/images/plantlamp_main.jpg"
      },
      details: [
        {
          imageId: 1,
          url: "../assets/images/plantlamp_main.jpg"
        },
        {
          imageId: 2,
          url: "../assets/images/plantlamp_detail1.jpg",
        },
      ]
    }
  },
  {
    id: 32,
    category: "accessoires",
    title: "Watering Can",
    caption:
      "Planten hebben ook water nodig.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: 15,
    featured: false,
    details: {
      height: 50,
      width: 10,
      position: ""
  },
    images: {
      main: {
        imageId: 1,
        url: "../assets/images/wateringcan_main.jpg"
      },
      details: [
        {
          imageId: 1,
          url: "../assets/images/wateringcan_main.jpg"
        },
        {
          imageId: 2,
          url: "../assets/images/wateringcan_detail1.jpg",
        },
      ]
    }
  },
  {
    id: 33,
    category: "accessoires",
    title: "Plant Animals",
    caption:
      "Geef wat bling aan je plant.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: 5,
    featured: true,
    details: {
      height: 50,
      width: 10,
      position: ""
  },
    images: {
      main: {
        imageId: 1,
        url: "../assets/images/plantanimal_main.jpg"
      },
      details: [
        {
          imageId: 1,
          url: "../assets/images/plantanimal_main.jpg"
        },
        {
          imageId: 2,
          url: "../assets/images/plantanimal_detail1.jpg",
        },
     
      ]
    }
  }  
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
