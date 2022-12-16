import type {Student, Teacher} from "@prisma/client";
import {PureAbility, InferSubjects} from "@casl/ability"
import {Action} from "./permissions.enum"

type AbilityStudent = Student;
type AbilityTeacher = Teacher;

export type TeacherSubjects = InferSubjects<AbilityTeacher> | "all"; 
export type StudentSubjects = InferSubjects<AbilityStudent> | "all";

export type TeacherAbility = PureAbility<[Action, TeacherSubjects]>;
export type StudentAbility = PureAbility<[Action, StudentSubjects]>;
