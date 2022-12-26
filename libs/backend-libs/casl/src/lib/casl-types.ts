import type {Admin} from "@prisma/client";
import {PureAbility, InferSubjects} from "@casl/ability"
import {Action} from "./permissions.enum"

type AbilityAdmin = Admin;

export type AdminSubjects = InferSubjects<AbilityAdmin> | "all";

export type AdminAbility = PureAbility<[Action, AdminSubjects]> 