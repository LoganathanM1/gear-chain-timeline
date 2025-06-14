
import { SupplyChainData } from '@/types/supplyChain';

export const supplyChainData: SupplyChainData = {
  categories: {
    componentManufacturing: {
      name: "Component Manufacturing",
      companies: [
        {
          id: "engine-plant",
          name: "Engine Plant",
          color: "#e63946",
          events: [
            {
              type: "bar",
              start: "2022-12-02T06:00:00",
              end: "2022-12-02T14:00:00",
              status: "Completed",
              consignment: "ENG2401",
              temperature: 68
            },
            {
              type: "dot",
              time: "2022-12-02T10:00:00",
              status: "Quality Check",
              consignment: "ENG2401"
            }
          ],
          dependencies: [
            {
              targetCompany: "northplant-assembly",
              time: "2022-12-02T14:00:00"
            }
          ]
        },
        {
          id: "battery-unit",
          name: "Battery Unit",
          color: "#f77f00",
          events: [
            {
              type: "bar",
              start: "2022-12-02T08:00:00",
              end: "2022-12-02T16:00:00",
              status: "Completed",
              consignment: "BAT3301",
              temperature: 72
            },
            {
              type: "dot",
              time: "2022-12-02T12:00:00",
              status: "Temperature Check",
              consignment: "BAT3301"
            }
          ]
        },
        {
          id: "electronics-division",
          name: "Electronics Division",
          color: "#fcbf49",
          events: [
            {
              type: "bar",
              start: "2022-12-02T07:00:00",
              end: "2022-12-02T15:00:00",
              status: "In Progress",
              consignment: "ELEC4401",
              temperature: 70
            },
            {
              type: "dot",
              time: "2022-12-02T11:00:00",
              status: "Testing",
              consignment: "ELEC4401"
            }
          ]
        },
        {
          id: "chassis-foundry",
          name: "Chassis Foundry",
          color: "#eae2b7",
          events: [
            {
              type: "bar",
              start: "2022-12-02T05:00:00",
              end: "2022-12-02T17:00:00",
              status: "Completed",
              consignment: "CHS5501",
              temperature: 75
            }
          ]
        }
      ]
    },
    tier1Logistics: {
      name: "Tier 1 Logistics",
      companies: [
        {
          id: "autotrans-logistics",
          name: "AutoTrans Logistics",
          color: "#003049",
          events: [
            {
              type: "bar",
              start: "2022-12-02T11:00:00",
              end: "2022-12-02T15:00:00",
              status: "In Transit",
              consignment: "C76106Z",
              temperature: 72
            },
            {
              type: "dot",
              time: "2022-12-02T13:00:00",
              status: "Customs Check",
              consignment: "C76106Z"
            }
          ],
          dependencies: [
            {
              targetCompany: "northplant-assembly",
              time: "2022-12-02T15:00:00"
            }
          ]
        },
        {
          id: "flexifreight",
          name: "FlexiFreight",
          color: "#277da1",
          events: [
            {
              type: "bar",
              start: "2022-12-02T16:00:00",
              end: "2022-12-02T20:00:00",
              status: "Completed",
              consignment: "FF8801",
              temperature: 71
            }
          ]
        },
        {
          id: "ironwheel-cargo",
          name: "IronWheel Cargo",
          color: "#4d908e",
          events: [
            {
              type: "bar",
              start: "2022-12-03T09:00:00",
              end: "2022-12-03T13:00:00",
              status: "In Transit",
              consignment: "IWC9901",
              temperature: 69
            },
            {
              type: "dot",
              time: "2022-12-03T11:00:00",
              status: "Route Update",
              consignment: "IWC9901"
            }
          ]
        },
        {
          id: "motodeliver",
          name: "MotoDeliver",
          color: "#43aa8b",
          events: [
            {
              type: "bar",
              start: "2022-12-03T14:00:00",
              end: "2022-12-03T18:00:00",
              status: "In Progress",
              consignment: "MD1122",
              temperature: 73
            }
          ]
        }
      ]
    },
    vehicleAssembly: {
      name: "Vehicle Assembly",
      companies: [
        {
          id: "northplant-assembly",
          name: "NorthPlant Assembly",
          color: "#90e0ef",
          events: [
            {
              type: "bar",
              start: "2022-12-02T15:00:00",
              end: "2022-12-03T08:00:00",
              status: "In Progress",
              consignment: "NPA3344",
              temperature: 68
            },
            {
              type: "dot",
              time: "2022-12-02T22:00:00",
              status: "Shift Change",
              consignment: "NPA3344"
            }
          ],
          dependencies: [
            {
              targetCompany: "railfleet-express",
              time: "2022-12-03T08:00:00"
            }
          ]
        },
        {
          id: "autofusion-systems",
          name: "AutoFusion Systems",
          color: "#00b4d8",
          events: [
            {
              type: "bar",
              start: "2022-12-03T10:00:00",
              end: "2022-12-04T02:00:00",
              status: "In Progress",
              consignment: "AFS4455",
              temperature: 70
            },
            {
              type: "dot",
              time: "2022-12-03T18:00:00",
              status: "Quality Gate",
              consignment: "AFS4455"
            }
          ]
        },
        {
          id: "titan-automotive",
          name: "Titan Automotive Assembly",
          color: "#0077b6",
          events: [
            {
              type: "bar",
              start: "2022-12-04T06:00:00",
              end: "2022-12-04T18:00:00",
              status: "Scheduled",
              consignment: "TAA5566",
              temperature: 69
            }
          ]
        }
      ]
    },
    tier2Distribution: {
      name: "Tier 2 Distribution",
      companies: [
        {
          id: "railfleet-express",
          name: "RailFleet Express",
          color: "#023e8a",
          events: [
            {
              type: "bar",
              start: "2022-12-03T08:00:00",
              end: "2022-12-03T20:00:00",
              status: "In Transit",
              consignment: "RFE6677",
              temperature: 74
            },
            {
              type: "dot",
              time: "2022-12-03T14:00:00",
              status: "Transfer Point",
              consignment: "RFE6677"
            }
          ],
          dependencies: [
            {
              targetCompany: "drivenation",
              time: "2022-12-03T20:00:00"
            }
          ]
        },
        {
          id: "motorail-logistics",
          name: "MotoRail Logistics",
          color: "#03045e",
          events: [
            {
              type: "bar",
              start: "2022-12-04T02:00:00",
              end: "2022-12-04T14:00:00",
              status: "In Transit",
              consignment: "MRL7788",
              temperature: 71
            }
          ]
        },
        {
          id: "carotrans-freight",
          name: "CaroTrans Freight",
          color: "#370617",
          events: [
            {
              type: "bar",
              start: "2022-12-04T16:00:00",
              end: "2022-12-05T04:00:00",
              status: "Scheduled",
              consignment: "CTF8899",
              temperature: 72
            }
          ]
        }
      ]
    },
    dealerships: {
      name: "Dealerships",
      companies: [
        {
          id: "drivenation",
          name: "DriveNation",
          color: "#6a040f",
          events: [
            {
              type: "bar",
              start: "2022-12-03T20:00:00",
              end: "2022-12-04T08:00:00",
              status: "Receiving",
              consignment: "DN9900",
              temperature: 70
            },
            {
              type: "dot",
              time: "2022-12-04T06:00:00",
              status: "Inventory Check",
              consignment: "DN9900"
            }
          ]
        },
        {
          id: "autogalaxy",
          name: "AutoGalaxy",
          color: "#9d0208",
          events: [
            {
              type: "bar",
              start: "2022-12-04T14:00:00",
              end: "2022-12-05T06:00:00",
              status: "Scheduled",
              consignment: "AG1010",
              temperature: 68
            }
          ]
        },
        {
          id: "citycars",
          name: "CityCars",
          color: "#d00000",
          events: [
            {
              type: "bar",
              start: "2022-12-05T08:00:00",
              end: "2022-12-05T16:00:00",
              status: "Scheduled",
              consignment: "CC1111",
              temperature: 73
            }
          ]
        },
        {
          id: "ride-shine",
          name: "Ride & Shine",
          color: "#dc2f02",
          events: [
            {
              type: "bar",
              start: "2022-12-05T18:00:00",
              end: "2022-12-05T22:00:00",
              status: "Scheduled",
              consignment: "RS1212",
              temperature: 71
            }
          ]
        }
      ]
    }
  }
};
