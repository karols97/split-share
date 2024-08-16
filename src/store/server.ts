import { createServer, Model } from "miragejs";

export type Member = {
  id?: string;
  userName: string;
  amount: number;
};

export interface Group {
  id: string;
  name: string;
  members: Member[];
}

const groups: Group[] = [
  {
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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

export const makeServer = () => {
  return createServer({
    models: {
      group: Model.extend<Partial<Group>>({}),
    },

    seeds(server) {
      groups.forEach((singleGroup) => server.create("group", singleGroup));
    },

    routes() {
      this.namespace = "api";

      this.get("groups", (schema) => {
        return {
          groups: schema.db.groups,
        };
      });

      this.post("groups", (schema, request) => {
        const args = JSON.parse(request.requestBody);
        //@ts-expect-error no groups in schema type
        schema.groups.create(args);

        return {
          groups: schema.db.groups,
        };
      });

      this.delete("/groups/:id", (schema, request) => {
        const id = request.params.id;
        //@ts-expect-error no groups in schema type
        const group = schema.groups.find(id);

        if (group) {
          group.destroy();
          return new Response(null, { status: 204 });
        } else {
          return new Response(null, { status: 404, statusText: "Group not found" });
        }
      });
    },
  });
};
