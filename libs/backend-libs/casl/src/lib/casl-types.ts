/* import type {Student, Teacher, Admin} from "@prisma/client";
import {PureAbility, InferSubjects} from "@casl/ability"
import {Action} from "./permissions.enum"

type AbilityStudent = Student;
type AbilityTeacher = Teacher;
type AbilityAdmin = Admin;

export type TeacherSubjects = InferSubjects<AbilityTeacher> | "all"; 
export type StudentSubjects = InferSubjects<AbilityStudent> | "all";
export type AdminSubjects = InferSubjects<AbilityAdmin> | "all";

export type TeacherAbility = PureAbility<[Action, TeacherSubjects]>;
export type StudentAbility = PureAbility<[Action, StudentSubjects]>;
export type AdminAbility = PureAbility<[Action, AdminSubjects]> */ // TODO: Refactor this later