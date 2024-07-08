import { createServer } from "miragejs";

export interface Group {
  id: string;
  name: string;
  members: {
    userName: string;
    amount: number;
  }[];
}

createServer({
  routes() {
    this.namespace = "api";

    this.get("/groups", () => {
      return {
        groups: [
          {
            id: "1",
            name: "Holidays",
            members: [
              {
                userName: "Jim",
                amount: -13.23,
              },
              {
                userName: "Pam",
                amount: -13.23,
              },
              {
                userName: "Dwight",
                amount: 32.2,
              },
            ],
          },
          {
            id: "2",
            name: "Flat expenses",
            members: [
              {
                userName: "Michael",
                amount: -4.51,
              },
              {
                userName: "Kevin",
                amount: 15.69,
              },
              {
                userName: "Meredith",
                amount: 40,
              },
            ],
          },
          {
            id: "3",
            name: "Friday movie night",
            members: [
              {
                userName: "Ryan",
                amount: 5.67,
              },
              {
                userName: "Kelly",
                amount: -24.67,
              },
              {
                userName: "Michael",
                amount: 14.12,
              },
              {
                userName: "Pam",
                amount: 14.12,
              },
            ],
          },
          {
            id: "4",
            name: "Mountain trip",
            members: [
              {
                userName: "David",
                amount: -154.14,
              },
              {
                userName: "Ryan",
                amount: 22.13,
              },
              {
                userName: "Toby",
                amount: 14.12,
              },
              {
                userName: "Jan",
                amount: 22.13,
              },
            ],
          },
          {
            id: "5",
            name: "Birthday preset",
            members: [
              {
                userName: "Creed",
                amount: -54.14,
              },
              {
                userName: "Angela",
                amount: 22.13,
              },
              {
                userName: "Phyllis",
                amount: 14.12,
              },
              {
                userName: "Darryl",
                amount: 22.13,
              },
            ],
          },
        ],
      };
    });
  },
});
