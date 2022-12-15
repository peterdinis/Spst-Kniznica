import { Injectable } from "@nestjs/common";
import type {Student, Teacher} from "@prisma/client";
import {Action} from "./permissions.enum"
import {PureAbility, AbilityBuilder, AbilityClass, InferSubjects} from "@casl/ability"

type  AbilityStudent = Student;
type AbilityTeacher = Teacher;

export type TeacherSubjects = InferSubjects<AbilityTeacher> | "all"; 
export type StudentSubjects = InferSubjects<AbilityStudent> | "all";

export type TeacherAbility = PureAbility<[Action, TeacherSubjects]>;
export type StudentAbility = PureAbility<[Action, StudentSubjects]>;


@Injectable()
export class CaslAbilityFactory {
    defineAbilityForStudent() {
        const builder = new AbilityBuilder(PureAbility as AbilityClass<TeacherAbility>);
        /* TODO: Adding here more attibutes like create book category borrowing */
        builder.can(Action.Manage, "all");
        builder.cannot(Action.Create, "all");
        builder.cannot(Action.Update, "all");
        builder.cannot(Action.Delete, "all");
        return builder;
    }

    defineAbilityForTeacher() {
        const builder = new AbilityBuilder(PureAbility as AbilityClass<StudentAbility>);
        /* TODO: Adding here more attibutes like create book category borrowing */
        builder.can(Action.Manage, "all");
        builder.can(Action.Create, "all");
        builder.can(Action.Update, "all");
        builder.can(Action.Delete, "all");
        return builder;
    }
}

