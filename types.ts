import { GetUsersQuery } from "@/graphql/generated"

// type just need one entry, hence [0]
export type Message = GetUsersQuery["users"][0]["messages"][0]
export type User = GetUsersQuery["users"][0]