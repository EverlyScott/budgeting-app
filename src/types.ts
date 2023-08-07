import { z } from "zod";

export const TimePeriods = z.union([z.literal("days"), z.literal("weeks"), z.literal("months"), z.literal("years")]);

export const PayDuration = z.object({
  interval: z.number().gte(1).lte(31),
  timePeriod: TimePeriods,
});

export const AppConfig = z.object({
  payDuration: PayDuration,
  firstPayCheckDate: z.coerce
    .string()
    .regex(
      /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/
    ),
});

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const CategoryID = z.coerce.string().uuid();

export const Transaction = z.object({
  isPayCheck: z.optional(z.boolean()),
  name: z.string(),
  amount: z.number(),
  date: z.string(),
  categoryId: z.optional(CategoryID, {
    description: "If categoryId is undefined, it will be 'assigned' to the Other category in code",
  }),
});

export const Category = z.object({
  id: CategoryID,
  name: z.string(),
  hex: z.coerce.string().regex(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/),
});

export const DB = z.object({
  transactions: z.array(Transaction),
  categories: z.array(Category),
});
