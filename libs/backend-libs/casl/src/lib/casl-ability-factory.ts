import { Injectable } from "@nestjs/common";
import type {Student, Teacher} from "@prisma/client";
import {Action} from "./permissions.enum"
import {Ability, AbilityBuilder, InferSubjects} from "@casl/ability"

type  AbilityStudent = Student;
type AbilityTeacher = Teacher;

export type Subjects = InferSubjects<AbilityStudent | AbilityTeacher> | "all"; 

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    defineAbilityForStudent() {
        const builder = new AbilityBuilder(Ability);
        builder.can("test", "all");
        return;
    }

    defineAbilityForTeacher() {
        const builder = new AbilityBuilder(Ability);
        builder.can("test", "all");
        return;
    }
}

