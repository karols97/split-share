import { createServer } from "miragejs";

export type Member = {
  id?: string;
  userName: string;
  amount: number;
};

export interface Group {
  id?: string;
  name: string;
  members: Member[];
}

const createIds = (groups: Group[]) => {
  return groups.map((singleGroup, groupIndex) => {
    return {
      id: `${groupIndex}`,
      name: singleGroup.name,
      members: singleGroup.members.map((singleMember, memberIndex) => {
        return {
          id: `${groupIndex}_${memberIndex}`,
          ...singleMember,
        };
      }),
    };
  });
};

const groups = [
  {
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
];

createServer({
  routes() {
    this.namespace = "api";

    this.post("groups", (schema, request) => {
      let args = JSON.parse(request.requestBody);
      groups.push(args);

      return {
        groups: createIds(groups),
      };
    });

    this.get("/groups", () => {
      return {
        groups: createIds(groups),
      };
    });
  },
});
