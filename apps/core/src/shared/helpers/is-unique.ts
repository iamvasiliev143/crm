import { Connection, EntitySchema, FindConditions, ObjectType } from 'typeorm';
import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

import { AccountTypeE } from '@core/shared/consts';

const fieldsToId: {
  [index: string]: string;
} = {
  accountType: 'id',
  language: 'code',
};

const extraConditions: {
  [index: string]: {
    type: AccountTypeE;
  };
} = {
  TraderOpenTradingAccountDTO_accountType: {
    type: AccountTypeE.trading,
  },

  TraderOpenDemoAccountDTO_accountType: {
    type: AccountTypeE.demo,
  },
};

interface UniqueValidationArguments<E> extends ValidationArguments {
  constraints: [
    ObjectType<E> | EntitySchema<E> | string,
    ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E,
  ];
}

export abstract class UniqueValidator implements ValidatorConstraintInterface {
  protected constructor(protected readonly connection: Connection) {}

  public async validate<E>(value: string, args: UniqueValidationArguments<E>) {
    const [EntityClass, findCondition = args.property] = args.constraints;
    return (
      (await this.connection.getRepository(EntityClass).count({
        where:
          typeof findCondition === 'function'
            ? findCondition(args)
            : {
                [findCondition || args.property]: value,
              },
      })) <= 0
    );
  }

  public defaultMessage(args: ValidationArguments) {
    const [EntityClass] = args.constraints;
    const entity = EntityClass.name || 'Entity';
    return `${entity} with the same '${args.property}' already exist`;
  }
}

export abstract class ExistValidator implements ValidatorConstraintInterface {
  protected constructor(protected readonly connection: Connection) {}

  public async validate<E>(value: string, args: UniqueValidationArguments<E>) {
    let [EntityClass, findCondition = args.property] = args.constraints;
    let conditions!: {
      [index: string]: string;
    };

    if (Object.keys(fieldsToId).includes(findCondition.toString())) {
      findCondition = fieldsToId[findCondition.toString()];
    }

    if (
      Object.keys(extraConditions).includes(
        `${args.targetName}_${args.property}`,
      )
    ) {
      conditions = extraConditions[`${args.targetName}_${args.property}`];
    }

    return !(
      (await this.connection.getRepository(EntityClass).count({
        where:
          typeof findCondition === 'function'
            ? findCondition(args)
            : {
                [findCondition || args.property]: value,
                ...conditions,
              },
      })) <= 0
    );
  }

  public defaultMessage(args: ValidationArguments) {
    let [EntityClass, findCondition = args.property] = args.constraints;
    const entity = EntityClass.name || 'Entity';

    if (Object.keys(fieldsToId).includes(findCondition.toString())) {
      findCondition = fieldsToId[findCondition.toString()];
      return `${entity} is not exist`;
    }

    return `${entity} with the '${findCondition}' is not exist`;
  }
}
