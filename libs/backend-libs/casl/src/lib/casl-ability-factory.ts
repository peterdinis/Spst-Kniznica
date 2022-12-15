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
        /* builder.can("test", "all"); */
        return;
    }

    defineAbilityForTeacher() {
        const builder = new AbilityBuilder(PureAbility as AbilityClass<StudentAbility>);
        /* builder.can("test", "all"); */
        return;
    }
}

