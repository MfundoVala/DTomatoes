import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import filmReducer from "../redux/filmSlice";

export const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export function renderWithProviders(
  ui,
  {
    store = configureStore({
      reducer: { films: filmReducer },
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return {
    user: userEvent.setup(),
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export const testData = [
  {
    title: "Avengers: Endgame",
    description:
      "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/avengers_end_game.jpg",
        width: 467,
        height: 700,
      },
    },
    releaseYear: 2019,
    id: 1,
    isFavorite: false,
  },
  {
    title: "Ex Machina",
    description:
      "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/ex_machina.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 2015,
    id: 2,
    isFavorite: false,
  },
  {
    title: "The Martian",
    description:
      "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_martian.jpg",
        width: 500,
        height: 740,
      },
    },
    releaseYear: 2015,
    id: 3,
    isFavorite: false,
  },
  {
    title: "The Grand Budapest Hotel",
    description:
      "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_grand_budapest_hotel.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 2014,
    id: 4,
    isFavorite: false,
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/interstellar.jpg",
        width: 500,
        height: 781,
      },
    },
    releaseYear: 2014,
    id: 5,
    isFavorite: false,
  },
  {
    title: "The Wolf of Wall Street",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_wolf_of_wall_street.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 2013,
    id: 6,
    isFavorite: false,
  },
  {
    title: "The Great Beauty",
    description:
      "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_great_beauty.jpg",
        width: 500,
        height: 732,
      },
    },
    releaseYear: 2013,
    id: 7,
    isFavorite: false,
  },
  {
    title: "The Impossible",
    description:
      "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_impossible.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 2012,
    id: 8,
    isFavorite: false,
  },
  {
    title: "Black Swan",
    description:
      'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/black_swan.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 2010,
    id: 9,
    isFavorite: false,
  },
  {
    title: "Inception",
    description:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/inception.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 2010,
    id: 10,
    isFavorite: false,
  },
  {
    title: "Shutter Island",
    description:
      "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/shutter_island.jpg",
        width: 500,
        height: 753,
      },
    },
    releaseYear: 2010,
    id: 11,
    isFavorite: false,
  },
  {
    title: "WALL·E",
    description:
      "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/wall_e.jpg",
        width: 500,
        height: 740,
      },
    },
    releaseYear: 2008,
    id: 12,
    isFavorite: false,
  },
  {
    title: "Pirates of the Caribbean: At World's End",
    description:
      "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pirates_of_the_caribbean.jpg",
        width: 450,
        height: 666,
      },
    },
    releaseYear: 2007,
    id: 13,
    isFavorite: false,
  },
  {
    title: "No Country for Old Men",
    description:
      "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/no_country_for_old_men.jpg",
        width: 500,
        height: 736,
      },
    },
    releaseYear: 2007,
    id: 14,
    isFavorite: false,
  },
  {
    title: "V for Vendetta",
    description:
      'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.',
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/v_for_vendetta.jpg",
        width: 500,
        height: 740,
      },
    },
    releaseYear: 2005,
    id: 15,
    isFavorite: false,
  },
  {
    title: "Sin City",
    description:
      "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/sin_city.jpg",
        width: 500,
        height: 747,
      },
    },
    releaseYear: 2005,
    id: 16,
    isFavorite: false,
  },
  {
    title: "Crash",
    description:
      "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/crash.jpg",
        width: 500,
        height: 740,
      },
    },
    releaseYear: 2004,
    id: 17,
    isFavorite: false,
  },
  {
    title: "Catch Me If You Can",
    description:
      "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/catch_me_if_you_can.jpg",
        width: 485,
        height: 719,
      },
    },
    releaseYear: 2002,
    id: 18,
    isFavorite: false,
  },
  {
    title: "Spirited Away",
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/spirited_away.jpg",
        width: 450,
        height: 635,
      },
    },
    releaseYear: 2001,
    id: 19,
    isFavorite: false,
  },
  {
    title: "Shrek",
    description:
      "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/shrek.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 2001,
    id: 20,
    isFavorite: false,
  },
  {
    title: "American History X",
    description:
      "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_history_x.jpg",
        width: 497,
        height: 736,
      },
    },
    releaseYear: 1998,
    id: 21,
    isFavorite: false,
  },
  {
    title: "The Truman Show",
    description:
      "An insurance salesman/adjuster discovers his entire life is actually a television show.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_truman_show.jpg",
        width: 500,
        height: 742,
      },
    },
    releaseYear: 1998,
    id: 22,
    isFavorite: false,
  },
  {
    title: "Gattaca",
    description:
      "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/gattaca.jpg",
        width: 500,
        height: 747,
      },
    },
    releaseYear: 1997,
    id: 23,
    isFavorite: false,
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pulp_fiction.jpg",
        width: 500,
        height: 743,
      },
    },
    releaseYear: 1994,
    id: 24,
    isFavorite: false,
  },
  {
    title: "Reservoir Dogs",
    description:
      "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/reservoir_dogs.jpg",
        width: 500,
        height: 722,
      },
    },
    releaseYear: 1992,
    id: 25,
    isFavorite: false,
  },
  {
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_silence_of_the_lambs.jpg",
        width: 500,
        height: 750,
      },
    },
    releaseYear: 1991,
    id: 26,
    isFavorite: false,
  },
  {
    title: "Once Upon a Time in America",
    description:
      "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/once_upon_a_time_in_america.jpg",
        width: 500,
        height: 781,
      },
    },
    releaseYear: 1984,
    id: 27,
    isFavorite: false,
  },
  {
    title: "Scarface",
    description:
      "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/scarface.jpg",
        width: 500,
        height: 741,
      },
    },
    releaseYear: 1983,
    id: 28,
    isFavorite: false,
  },
  {
    title: "Chinatown",
    description:
      "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/chinatown.jpg",
        width: 500,
        height: 715,
      },
    },
    releaseYear: 1974,
    id: 29,
    isFavorite: false,
  },
  {
    title: "Rear Window",
    description:
      "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
    programType: "movies",
    images: {
      posterArt: {
        url: "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/rear_window.jpg",
        width: 500,
        height: 732,
      },
    },
    releaseYear: 1954,
    id: 30,
    isFavorite: false,
  },
];
