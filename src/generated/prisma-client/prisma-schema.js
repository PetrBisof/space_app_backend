module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAstronaut {
  count: Int!
}

type AggregateFlight {
  count: Int!
}

type Astronaut {
  id: ID!
  createdAt: DateTime!
  name: String!
  surname: String!
  experience: String!
  age: Int!
  flight: Flight
}

type AstronautConnection {
  pageInfo: PageInfo!
  edges: [AstronautEdge]!
  aggregate: AggregateAstronaut!
}

input AstronautCreateInput {
  id: ID
  name: String!
  surname: String!
  experience: String!
  age: Int!
  flight: FlightCreateOneWithoutAstronautInput
}

input AstronautCreateManyWithoutFlightInput {
  create: [AstronautCreateWithoutFlightInput!]
  connect: [AstronautWhereUniqueInput!]
}

input AstronautCreateWithoutFlightInput {
  id: ID
  name: String!
  surname: String!
  experience: String!
  age: Int!
}

type AstronautEdge {
  node: Astronaut!
  cursor: String!
}

enum AstronautOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  surname_ASC
  surname_DESC
  experience_ASC
  experience_DESC
  age_ASC
  age_DESC
}

type AstronautPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  surname: String!
  experience: String!
  age: Int!
}

input AstronautScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  surname: String
  surname_not: String
  surname_in: [String!]
  surname_not_in: [String!]
  surname_lt: String
  surname_lte: String
  surname_gt: String
  surname_gte: String
  surname_contains: String
  surname_not_contains: String
  surname_starts_with: String
  surname_not_starts_with: String
  surname_ends_with: String
  surname_not_ends_with: String
  experience: String
  experience_not: String
  experience_in: [String!]
  experience_not_in: [String!]
  experience_lt: String
  experience_lte: String
  experience_gt: String
  experience_gte: String
  experience_contains: String
  experience_not_contains: String
  experience_starts_with: String
  experience_not_starts_with: String
  experience_ends_with: String
  experience_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  AND: [AstronautScalarWhereInput!]
  OR: [AstronautScalarWhereInput!]
  NOT: [AstronautScalarWhereInput!]
}

type AstronautSubscriptionPayload {
  mutation: MutationType!
  node: Astronaut
  updatedFields: [String!]
  previousValues: AstronautPreviousValues
}

input AstronautSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AstronautWhereInput
  AND: [AstronautSubscriptionWhereInput!]
  OR: [AstronautSubscriptionWhereInput!]
  NOT: [AstronautSubscriptionWhereInput!]
}

input AstronautUpdateInput {
  name: String
  surname: String
  experience: String
  age: Int
  flight: FlightUpdateOneWithoutAstronautInput
}

input AstronautUpdateManyDataInput {
  name: String
  surname: String
  experience: String
  age: Int
}

input AstronautUpdateManyMutationInput {
  name: String
  surname: String
  experience: String
  age: Int
}

input AstronautUpdateManyWithoutFlightInput {
  create: [AstronautCreateWithoutFlightInput!]
  delete: [AstronautWhereUniqueInput!]
  connect: [AstronautWhereUniqueInput!]
  set: [AstronautWhereUniqueInput!]
  disconnect: [AstronautWhereUniqueInput!]
  update: [AstronautUpdateWithWhereUniqueWithoutFlightInput!]
  upsert: [AstronautUpsertWithWhereUniqueWithoutFlightInput!]
  deleteMany: [AstronautScalarWhereInput!]
  updateMany: [AstronautUpdateManyWithWhereNestedInput!]
}

input AstronautUpdateManyWithWhereNestedInput {
  where: AstronautScalarWhereInput!
  data: AstronautUpdateManyDataInput!
}

input AstronautUpdateWithoutFlightDataInput {
  name: String
  surname: String
  experience: String
  age: Int
}

input AstronautUpdateWithWhereUniqueWithoutFlightInput {
  where: AstronautWhereUniqueInput!
  data: AstronautUpdateWithoutFlightDataInput!
}

input AstronautUpsertWithWhereUniqueWithoutFlightInput {
  where: AstronautWhereUniqueInput!
  update: AstronautUpdateWithoutFlightDataInput!
  create: AstronautCreateWithoutFlightInput!
}

input AstronautWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  surname: String
  surname_not: String
  surname_in: [String!]
  surname_not_in: [String!]
  surname_lt: String
  surname_lte: String
  surname_gt: String
  surname_gte: String
  surname_contains: String
  surname_not_contains: String
  surname_starts_with: String
  surname_not_starts_with: String
  surname_ends_with: String
  surname_not_ends_with: String
  experience: String
  experience_not: String
  experience_in: [String!]
  experience_not_in: [String!]
  experience_lt: String
  experience_lte: String
  experience_gt: String
  experience_gte: String
  experience_contains: String
  experience_not_contains: String
  experience_starts_with: String
  experience_not_starts_with: String
  experience_ends_with: String
  experience_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  flight: FlightWhereInput
  AND: [AstronautWhereInput!]
  OR: [AstronautWhereInput!]
  NOT: [AstronautWhereInput!]
}

input AstronautWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Flight {
  id: ID!
  name: String!
  date: DateTime!
  astronaut(where: AstronautWhereInput, orderBy: AstronautOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Astronaut!]
  createdAt: DateTime!
}

type FlightConnection {
  pageInfo: PageInfo!
  edges: [FlightEdge]!
  aggregate: AggregateFlight!
}

input FlightCreateInput {
  id: ID
  name: String!
  date: DateTime!
  astronaut: AstronautCreateManyWithoutFlightInput
}

input FlightCreateOneWithoutAstronautInput {
  create: FlightCreateWithoutAstronautInput
  connect: FlightWhereUniqueInput
}

input FlightCreateWithoutAstronautInput {
  id: ID
  name: String!
  date: DateTime!
}

type FlightEdge {
  node: Flight!
  cursor: String!
}

enum FlightOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
}

type FlightPreviousValues {
  id: ID!
  name: String!
  date: DateTime!
  createdAt: DateTime!
}

type FlightSubscriptionPayload {
  mutation: MutationType!
  node: Flight
  updatedFields: [String!]
  previousValues: FlightPreviousValues
}

input FlightSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FlightWhereInput
  AND: [FlightSubscriptionWhereInput!]
  OR: [FlightSubscriptionWhereInput!]
  NOT: [FlightSubscriptionWhereInput!]
}

input FlightUpdateInput {
  name: String
  date: DateTime
  astronaut: AstronautUpdateManyWithoutFlightInput
}

input FlightUpdateManyMutationInput {
  name: String
  date: DateTime
}

input FlightUpdateOneWithoutAstronautInput {
  create: FlightCreateWithoutAstronautInput
  update: FlightUpdateWithoutAstronautDataInput
  upsert: FlightUpsertWithoutAstronautInput
  delete: Boolean
  disconnect: Boolean
  connect: FlightWhereUniqueInput
}

input FlightUpdateWithoutAstronautDataInput {
  name: String
  date: DateTime
}

input FlightUpsertWithoutAstronautInput {
  update: FlightUpdateWithoutAstronautDataInput!
  create: FlightCreateWithoutAstronautInput!
}

input FlightWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  astronaut_every: AstronautWhereInput
  astronaut_some: AstronautWhereInput
  astronaut_none: AstronautWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [FlightWhereInput!]
  OR: [FlightWhereInput!]
  NOT: [FlightWhereInput!]
}

input FlightWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAstronaut(data: AstronautCreateInput!): Astronaut!
  updateAstronaut(data: AstronautUpdateInput!, where: AstronautWhereUniqueInput!): Astronaut
  updateManyAstronauts(data: AstronautUpdateManyMutationInput!, where: AstronautWhereInput): BatchPayload!
  upsertAstronaut(where: AstronautWhereUniqueInput!, create: AstronautCreateInput!, update: AstronautUpdateInput!): Astronaut!
  deleteAstronaut(where: AstronautWhereUniqueInput!): Astronaut
  deleteManyAstronauts(where: AstronautWhereInput): BatchPayload!
  createFlight(data: FlightCreateInput!): Flight!
  updateFlight(data: FlightUpdateInput!, where: FlightWhereUniqueInput!): Flight
  updateManyFlights(data: FlightUpdateManyMutationInput!, where: FlightWhereInput): BatchPayload!
  upsertFlight(where: FlightWhereUniqueInput!, create: FlightCreateInput!, update: FlightUpdateInput!): Flight!
  deleteFlight(where: FlightWhereUniqueInput!): Flight
  deleteManyFlights(where: FlightWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  astronaut(where: AstronautWhereUniqueInput!): Astronaut
  astronauts(where: AstronautWhereInput, orderBy: AstronautOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Astronaut]!
  astronautsConnection(where: AstronautWhereInput, orderBy: AstronautOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AstronautConnection!
  flight(where: FlightWhereUniqueInput!): Flight
  flights(where: FlightWhereInput, orderBy: FlightOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Flight]!
  flightsConnection(where: FlightWhereInput, orderBy: FlightOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FlightConnection!
  node(id: ID!): Node
}

type Subscription {
  astronaut(where: AstronautSubscriptionWhereInput): AstronautSubscriptionPayload
  flight(where: FlightSubscriptionWhereInput): FlightSubscriptionPayload
}
`
      }
    