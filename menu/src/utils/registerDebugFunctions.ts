import { isBrowserEnv } from "./miscUtils";
import { debugData } from "./debugData";
import { VehicleStatus } from "../hooks/usePlayerListListener";

const MenuObject = {
  setVisible: (bool: boolean = true) => {
    debugData(
      [
        {
          action: "setVisible",
          data: bool,
        },
      ],
      0
    );
  },
  useMockPlayerList: () => {
    debugData([
      {
        action: "setPlayerList",
        data: [
          {
            vType: VehicleStatus.Walking,
            name: "Chip",
            id: 1,
            dist: 0,
            health: 80,
          },
          {
            vType: VehicleStatus.Driving,
            name: "Taso",
            id: 2,
            dist: 100,
            health: 50,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Tabarra",
            id: 3,
            dist: 60,
            health: 10,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 4,
            dist: 30,
            health: 100,
          },
          {
            vType: VehicleStatus.Unknown,
            name: "Death",
            id: 5,
            dist: 500,
            health: 70,
          },
          {
            vType: VehicleStatus.Walking,
            name: "Death",
            id: 6,
            dist: 500,
            health: 100,
          },
          {
            vType: VehicleStatus.Biking,
            name: "Death",
            id: 7,
            dist: -1,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 8,
            dist: 2000,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 9,
            dist: 500,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 10,
            dist: 500,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 11,
            dist: -1,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 12,
            dist: 500,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 13,
            dist: 500,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 14,
            dist: 11,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 15,
            dist: 500,
            health: 40,
          },
          {
            vType: VehicleStatus.Boat,
            name: "Death",
            id: 16,
            dist: 500,
            health: 40,
          },
        ],
      },
    ]);
  },
};

export const registerDebugFunctions = () => {
  if (isBrowserEnv()) {
    (window as any).menuDebug = MenuObject;

    console.log(
      "%ctxAdmin Menu Development",
      "font-weight: bold; font-size: 25px; color: red;"
    );
    console.log(
      "%cDebug Utilities have been injected for browser use. Inspect `window.menuDebug` object for further details.",
      "font-size: 15px; color: green;"
    );
  }
};