import { Injectable } from "@nestjs/common";
import {Action} from "./permissions.enum"
import {PureAbility, AbilityBuilder, AbilityClass} from "@casl/ability"
import {TeacherAbility, StudentAbility} from "./casl-types";


@Injectable()
export class CaslAbilityFactory {
    defineAbilityForStudent() {
        const builder = new AbilityBuilder(PureAbility as AbilityClass<TeacherAbility>);
        builder.can(Action.ManageBook, "all");
        builder.cannot(Action.CreateBook, "all");
        builder.cannot(Action.UpdateBook, "all");
        builder.cannot(Action.DeleteBook, "all");
        builder.can(Action.ManageCategory, "all");
        builder.cannot(Action.CreateCategory, "all");
        builder.cannot(Action.DeleteCategory, "all");
        builder.cannot(Action.UpdateCategory, "all");
        return builder;
    }

    defineAbilityForTeacher() {
        const builder = new AbilityBuilder(PureAbility as AbilityClass<StudentAbility>);
        builder.can(Action.ManageBook, "all");
        builder.can(Action.CreateBook, "all");
        builder.can(Action.UpdateBook, "all");
        builder.can(Action.DeleteBook, "all");
        builder.can(Action.ManageCategory, "all");
        builder.can(Action.CreateCategory, "all");
        builder.can(Action.DeleteCategory, "all");
        builder.can(Action.UpdateCategory, "all");
        return builder;
    }
}

