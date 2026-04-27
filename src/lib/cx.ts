export default function cx(
  ...args: Array<string | number | false | null | undefined>
): string {
  return args.filter(Boolean).join(" ");
}
