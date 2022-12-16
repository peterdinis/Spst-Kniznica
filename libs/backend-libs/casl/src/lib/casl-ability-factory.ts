import { Injectable } from "@nestjs/common";
import {Action} from "./permissions.enum"
import {PureAbility, AbilityBuilder, AbilityClass} from "@casl/ability"
import {TeacherAbility, StudentAbility} from "./casl-types";


@Injectable()
export class CaslAbilityFactory {
    defineAbilityForStudent() {
        const builder = new AbilityBuilder(PureAbility as AbilityClass<TeacherAbility>);
        builder.can(Action.Manage, "all"); // TODO: Update this
        builder.cannot(Action.Create, "all");
        builder.cannot(Action.Update, "all");
        builder.cannot(Action.Delete, "all");
        return builder;
    }

    defineAbilityForTeacher() {
        const builder = new AbilityBuilder(PureAbility as AbilityClass<StudentAbility>);
        builder.can(Action.Manage, "all");// TODO: Update this
        builder.can(Action.Create, "all");
        builder.can(Action.Update, "all");
        builder.can(Action.Delete, "all");
        return builder;
    }
}

